# Comando curl para enviar comandos a un dispositivo con un token y un deviceId:

	curl -X POST -H 'Authorization: Bearer xxTOKENxxxxxxxxxxxxxxxx' -d '{"to":"sys.cmd.info", "data":{"test": true}}' https://deviceid.dev.weblet.io/devices/cmd

# Mas info:
	https://api.weblet.io/docs/integration-guide.html#create-api-token-for-your-backend-via-rest
