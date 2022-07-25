import axios from 'axios';

const apiGIInternet = axios.create({
  baseURL: "https://nlgiinternetapi-v1.azurewebsites.net/api/v1/endpoint-infra"
});

export const apiIdentidade = axios.create({
  baseURL: "https://nlgierpidentidadeapi-v1.azurewebsites.net/api/v1/Identidade"
});

export default async function giInternet() {
  try {
    console.log("Get na GI internet. Linha: 14");
    const dataInternet = await apiGIInternet.get("/?codigoCliente=00000000-0000-0000-0000-000000000001");
    var statusInternet = dataInternet.request.status;
    console.log(dataInternet, statusInternet);

    if (statusInternet === 200) {
      console.log("Infraenpoint vai ser criado. linha: 19");
      const constInfraEndpoint = axios.create({
        baseURL: dataInternet.data
      });
      console.log(dataInternet.data);
      console.log("Get na infraendpoint. Linha: 23");

      const dataInfraEndpoint = await constInfraEndpoint.get("inicializador/endpoints-iniciais")
      var statusInfraEndpoint = dataInfraEndpoint.request.status;
      
      var urlApiIndica;
      if (statusInfraEndpoint === 200) {
        console.log("Filter no retorno da Infraendpoint. Linha: 27");
        urlApiIndica = dataInfraEndpoint.data.filter(x => x.id === "84720846-d06f-47db-0002-000000000000")
      }
      else{
        console.log("A requisicao do infraendpoint foi diferente de 200")
      }

    }else {
      console.log("Houve um erro com a parametrizacao inicial");
    }
    return urlApiIndica[0].endereco;
  } catch (error) {
    console.log("Nao foi possivel estruturar as APIs. Por favor, consulte o suporte NL   " + error)
  }
}

