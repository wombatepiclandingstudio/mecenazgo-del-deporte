'use client';

import { Document, Page, StyleSheet, Text, View, pdf } from '@react-pdf/renderer';
import type { DatosCertificado } from './estado';
import { euros } from './mecenazgo';

/**
 * Documento PDF del certificado de aportacion.
 *
 * Los componentes de @react-pdf/renderer solo se usan dentro de pdf(): nunca
 * se renderizan en el DOM, asi que este archivo no debe importarse desde un
 * componente de servidor.
 */

const estilos = StyleSheet.create({
  pagina: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    fontSize: 10.5,
    lineHeight: 1.6,
    color: '#1f2430',
    fontFamily: 'Helvetica',
  },
  encabezado: {
    borderBottomWidth: 2,
    borderBottomColor: '#3d63a8',
    paddingBottom: 14,
    marginBottom: 26,
  },
  titulo: { fontSize: 17, fontFamily: 'Helvetica-Bold', color: '#1f304c', marginBottom: 4 },
  subtitulo: { fontSize: 9.5, color: '#5b6270' },
  parrafo: { marginBottom: 14, textAlign: 'justify' },
  puntos: { marginBottom: 8, paddingLeft: 14, flexDirection: 'row' },
  vineta: { width: 14, color: '#3d63a8', fontFamily: 'Helvetica-Bold' },
  punto: { flex: 1 },
  bloque: {
    backgroundColor: '#f2f5fa',
    borderRadius: 6,
    padding: 14,
    marginBottom: 18,
  },
  bloqueRotulo: { fontSize: 8.5, letterSpacing: 1, color: '#5b6270', marginBottom: 6 },
  bloqueValor: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: '#1f304c' },
  firma: { marginTop: 42, flexDirection: 'row', justifyContent: 'space-between' },
  lineaFirma: { width: 220, borderTopWidth: 1, borderTopColor: '#9aa1ae', paddingTop: 6 },
  firmaNombre: { fontSize: 9, color: '#5b6270', marginTop: 2 },
  pie: {
    position: 'absolute',
    bottom: 32,
    left: 56,
    right: 56,
    borderTopWidth: 1,
    borderTopColor: '#dfe3ea',
    paddingTop: 8,
    fontSize: 8,
    color: '#7b828f',
  },
});

function linea(marca: string, etiqueta: string, valor: string) {
  return (
    <View key={marca} style={estilos.puntos}>
      <Text style={estilos.vineta}>{marca}</Text>
      <Text style={estilos.punto}>
        <Text style={{ fontFamily: 'Helvetica-Bold' }}>{etiqueta} </Text>
        {valor}
      </Text>
    </View>
  );
}

function DocumentoCertificado({ datos }: { datos: DatosCertificado }) {
  const fecha = datos.fecha ? datos.fecha.split('-').reverse().join('/') : '____________';
  const o = (v: string, alt: string) => (v && v.trim() ? v.trim() : alt);

  return (
    <Document
      title={`Certificacion de aportacion ${datos.entidad || ''}`.trim()}
      author={o(datos.entidad, 'Entidad donataria')}
      subject="Certificacion de aportacion - Ley 49/2002"
      creator="Verificador de mecenazgo"
    >
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.encabezado}>
          <Text style={estilos.titulo}>Certificacion de aportacion</Text>
          <Text style={estilos.subtitulo}>
            Ley 49/2002, de 23 de diciembre, de regimen fiscal de las entidades sin fines lucrativos y de
            los incentivos fiscales al mecenazgo
          </Text>
        </View>

        <Text style={estilos.parrafo}>
          La entidad <Text style={{ fontFamily: 'Helvetica-Bold' }}>{o(datos.entidad, '[DENOMINACION SOCIAL]')}</Text>,
          con NIF {o(datos.nifEntidad, '[NIF DE LA ENTIDAD]')}, certifica:
        </Text>

        {linea('1.', 'Que el donante es', `${o(datos.donante, '[DONANTE]')}, con NIF ${o(datos.nifDonante, '[NIF DEL DONANTE]')}.`)}
        {linea(
          '2.',
          'Que esta entidad se encuentra incluida entre las reguladas por el articulo 16',
          'de la Ley 49/2002, de 23 de diciembre, como entidad acreedora del mecenazgo.'
        )}
        {linea(
          '3.',
          'Que el dia',
          `${fecha} ha recibido del donante la cantidad de ${euros(datos.importe || 0)}, en concepto de aportacion.`
        )}
        {linea('4.', 'Que el destino que se dara a dicha aportacion es', `${o(datos.destino, '[DESTINO DE LA APORTACION]')}.`)}
        {linea(
          '5.',
          'Que la aportacion tiene caracter irrevocable',
          'y se realiza a favor de los fines de interes general de la entidad, sin condicionantes ni supuestos de revocacion.'
        )}

        <View style={estilos.bloque}>
          <Text style={estilos.bloqueRotulo}>IMPORTE CERTIFICADO</Text>
          <Text style={estilos.bloqueValor}>{euros(datos.importe || 0)}</Text>
        </View>

        <Text style={estilos.parrafo}>
          Se expide el presente certificado para que sirva como justificante de la deduccion que
          corresponda al donante conforme a los articulos 17 a 20 de la Ley 49/2002.
        </Text>

        <View style={estilos.firma} wrap={false}>
          <View>
            <Text style={estilos.lineaFirma} />
            <Text style={estilos.firmaNombre}>{o(datos.cargo, 'Representante')}</Text>
            <Text style={estilos.firmaNombre}>{o(datos.entidad, 'Entidad donataria')}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 9, color: '#5b6270' }}>En ______________, a {fecha}</Text>
          </View>
        </View>

        <Text
          style={estilos.pie}
          render={({ pageNumber, totalPages }) =>
            `Ley 49/2002, articulo 17 - pagina ${pageNumber} de ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

export type EstadoDescarga = 'inactivo' | 'generando' | 'error';

export async function descargarCertificado(datos: DatosCertificado): Promise<EstadoDescarga> {
  try {
    const blob = await pdf(<DocumentoCertificado datos={datos} />).toBlob();
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    const marca = new Date().toISOString().slice(0, 10);
    const nombre = (datos.entidad || 'entidad').replace(/[^\w\-]+/g, '-').toLowerCase();
    enlace.href = url;
    enlace.download = `certificado-mecenazgo-${nombre}-${marca}.pdf`;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    // Libera el objeto cuando el navegador ya ha recogido el archivo.
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    return 'inactivo';
  } catch (error) {
    console.error('No se ha podido generar el PDF', error);
    return 'error';
  }
}
