import { Document, Page } from "@/lib/pdf-primitives";
import { PageFooter } from "@/components/pdf/page-footer/page-footer";
import { PageHeader } from "@/components/pdf/page-header/page-header";
import { Section } from "@/components/pdf/section/section";
import { Text } from "@/components/pdf/text/text";
import { KeyValue } from "@/components/pdf/key-value/key-value";
import { PdfList } from "@/components/pdf/list/list";import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { fdjTheme } from "@/lib/pdf/theme";
import type { InformeCalculoModel } from "@/lib/pdf/informe";

/**
 * Informe de calculo en PDF. Los datos vienen del modelo: el componente solo
 * los maqueta, y todos van marcados como documento de trabajo.
 */
export function InformeCalculo({ model }: { model: InformeCalculoModel }) {
  return (
    <PdfcnThemeProvider theme={fdjTheme}>
      <Document title={model.titulo}>
        <Page size="a4">
          <PageHeader
            title={model.titulo}
            subtitle={model.subtitulo}
            rightText={model.programa}
          />

          <Section spacing="md">
            <Text variant="sm" color="mutedForeground">
              {model.donante}
            </Text>
          </Section>

          <Section spacing="md">
            <KeyValue
              items={model.lineas.map((l) => ({ key: l.key, value: l.value }))}
              divided
              boldValue
            />
          </Section>

          {model.notas.length > 0 && (
            <Section spacing="md" variant="callout">
              <Text variant="sm" weight="semibold">
                Notas
              </Text>
              <PdfList
                items={model.notas.map((n) => ({ text: n }))}
                variant="bullet"
              />
            </Section>
          )}

          <PageFooter leftText={model.pie} />
        </Page>
      </Document>
    </PdfcnThemeProvider>
  );
}
