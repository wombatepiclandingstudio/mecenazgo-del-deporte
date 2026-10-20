# Nada sale del dispositivo

La aplicación no tiene backend, ni base de datos, ni analítica, ni cuentas de usuario: todo el estado vive en el `localStorage` del navegador y no sale del dispositivo. La privacidad no es una consecuencia de la implementación actual, es una restricción del producto — es lo que la distingue de una calculadora fiscal con registro, y el usuario decide qué guarda. Cualquier función que necesite enviar datos a un servidor rompe esta decisión a propósito y se documenta en este ADR, en lugar de degradarse en silencio.
