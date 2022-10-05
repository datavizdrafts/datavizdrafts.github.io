//define data array
var tabledata = `Cidade,Vivi,Sofia,Vanessa,Thiago,Deputados
Abatia,2,1,0,0,0
Adrianopolis,0,0,0,0,0
Agudos Do Sul,4,0,0,0,0
Almirante Tamandare,95,35,26,17,43
Altamira Do Parana,3,0,0,0,0
Alto Paraiso,0,0,0,0,0
Alto Parana,8,4,2,4,6
Alto Piquiri,0,2,0,0,0
Altonia,13,3,2,3,5
Alvorada Do Sul,1,0,1,0,1
Amapora,1,0,0,0,0
Ampere,7,0,0,0,0
Anahy,2,0,0,0,0
Andira,12,2,2,4,6
Angulo,1,0,0,1,1
Antonina,8,6,2,0,2
Antonio Olinto,2,0,1,0,1
Apucarana,144,23,18,24,42
Arapongas,91,18,24,25,49
Arapoti,20,6,2,0,2
Arapua,0,0,0,0,0
Araruna,11,2,0,2,2
Araucaria,219,43,49,25,74
Ariranha Do Ivai,0,0,0,0,0
Assai,6,3,3,0,3
Assis Chateaubriand,13,3,4,4,8
Astorga,17,8,3,10,13
Atalaia,0,1,0,0,0
Balsa Nova,7,5,0,1,1
Bandeirantes,21,8,7,3,10
Barbosa Ferraz,2,1,0,0,0
Barra Do Jacare,1,1,0,0,0
Barracao,4,0,0,1,1
Bela Vista Da Caroba,3,0,0,0,0
Bela Vista Do Paraiso,6,3,5,11,16
Bituruna,11,1,0,0,0
Boa Esperanca,4,1,0,2,2
Boa Esperanca Do Iguacu,0,0,0,0,0
Boa Ventura De Sao Roque,0,1,0,0,0
Boa Vista Da Aparecida,4,2,1,0,1
Bocaiuva Do Sul,6,2,0,2,2
Bom Jesus Do Sul,1,0,0,0,0
Bom Sucesso,7,0,2,1,3
Bom Sucesso Do Sul,1,1,1,0,1
Borrazopolis,1,1,0,0,0
Braganey,2,0,0,0,0
Brasilandia Do Sul,2,0,0,0,0
Cafeara,3,0,0,1,1
Cafelandia,20,3,1,0,1
Cafezal Do Sul,0,1,0,0,0
California,8,0,0,3,3
Cambara,15,3,2,6,8
Cambe,117,25,27,21,48
Cambira,9,3,1,5,6
Campina Da Lagoa,16,5,3,1,4
Campina Do Simao,1,2,0,0,0
Campina Grande Do Sul,35,10,9,3,12
Campo Bonito,1,0,0,0,0
Campo Do Tenente,1,1,0,0,0
Campo Largo,120,28,31,11,42
Campo Magro,24,9,16,0,16
Campo Mourao,78,18,10,21,31
Candido De Abreu,8,1,1,2,3
Candoi,10,2,2,3,5
Cantagalo,4,0,0,0,0
Capanema,18,1,2,0,2
Capitao Leonidas Marques,6,1,0,0,0
Carambei,18,7,5,2,7
Carlopolis,13,1,0,1,1
Cascavel,468,70,94,54,148
Castro,51,9,6,3,9
Catanduvas,1,0,1,0,1
Centenario Do Sul,3,2,0,0,0
Cerro Azul,3,2,0,1,1
Ceu Azul,10,2,1,0,1
Chopinzinho,20,2,2,1,3
Cianorte,74,16,2,13,15
Cidade Gaucha,5,1,1,3,4
Clevelandia,8,0,2,1,3
Colombo,263,57,34,30,64
Colorado,11,2,0,4,4
Congonhinhas,2,1,0,0,0
Conselheiro Mairinck,3,2,0,0,0
Contenda,18,1,3,0,3
Corbelia,21,2,0,1,1
Cornelio Procopio,56,7,11,6,17
Coronel Domingos Soares,1,0,0,0,0
Coronel Vivida,24,3,4,4,8
Corumbatai Do Sul,1,1,0,0,0
Cruz Machado,9,1,0,0,0
Cruzeiro Do Iguacu,2,0,0,0,0
Cruzeiro Do Oeste,13,1,0,1,1
Cruzeiro Do Sul,3,0,0,1,1
Cruzmaltina,4,0,0,3,3
Curitiba,4491,864,1085,533,1618
Curiuva,2,2,1,0,1
Diamante Do Norte,2,0,0,0,0
Diamante D'Oeste,0,1,0,0,0
Diamante Do Sul,5,1,1,0,1
Dois Vizinhos,23,4,1,2,3
Douradina,3,1,0,0,0
Doutor Camargo,3,3,0,4,4
Doutor Ulysses,1,2,0,0,0
Eneas Marques,2,2,0,0,0
Engenheiro Beltrao,11,2,3,0,3
Entre Rios Do Oeste,0,0,0,0,0
Esperanca Nova,0,0,0,0,0
Espigao Alto Do Iguacu,2,2,0,0,0
Farol,0,0,0,0,0
Faxinal,14,0,3,0,3
Fazenda Rio Grande,135,32,22,18,40
Fenix,1,0,0,0,0
Fernandes Pinheiro,0,1,0,0,0
Figueira,2,0,0,0,0
Flor Da Serra Do Sul,0,0,0,0,0
Florai,3,1,0,6,6
Floresta,7,4,1,2,3
Florestopolis,6,0,1,0,1
Florida,3,1,0,1,1
Formosa Do Oeste,7,0,0,0,0
Foz Do Iguacu,489,99,103,63,166
Foz Do Jordao,3,1,0,0,0
Francisco Alves,0,0,0,0,0
Francisco Beltrao,72,9,11,14,25
General Carneiro,2,3,1,0,1
Godoy Moreira,0,0,0,0,0
Goioere,19,7,4,4,8
Goioxim,1,0,0,2,2
Grandes Rios,1,0,2,0,2
Guaira,19,10,7,2,9
Guairaca,1,1,0,0,0
Guamiranga,4,0,0,0,0
Guapirama,0,0,0,0,0
Guaporema,0,0,0,0,0
Guaraci,2,0,1,0,1
Guaraniacu,4,2,0,1,1
Guarapuava,203,44,55,33,88
Guaraquecaba,4,1,0,0,0
Guaratuba,33,6,6,1,7
Honorio Serpa,2,1,0,0,0
Ibaiti,10,7,2,2,4
Ibema,1,1,1,0,1
Ibipora,37,16,9,10,19
Icaraima,3,0,1,0,1
Iguaracu,4,0,0,6,6
Iguatu,1,0,0,0,0
Imbau,3,1,0,0,0
Imbituva,11,2,1,0,1
Inacio Martins,3,4,0,0,0
Inaja,0,1,0,0,0
Indianopolis,4,1,0,1,1
Ipiranga,11,1,1,5,6
Ipora,9,1,2,2,4
Iracema Do Oeste,0,0,0,0,0
Irati,50,10,5,3,8
Iretama,6,0,0,0,0
Itaguaje,2,0,0,1,1
Itaipulandia,9,0,0,1,1
Itambaraca,2,1,0,0,0
Itambe,9,2,1,0,1
Itapejara D'Oeste,6,2,1,1,2
Itaperucu,10,5,0,4,4
Itauna Do Sul,0,0,0,0,0
Ivai,3,0,0,0,0
Ivaipora,15,4,1,6,7
Ivate,1,0,0,0,0
Ivatuba,2,0,0,0,0
Jaboti,4,1,0,0,0
Jacarezinho,24,8,2,9,11
Jaguapita,11,2,0,4,4
Jaguariaiva,18,3,2,5,7
Jandaia Do Sul,15,1,2,8,10
Janiopolis,1,3,2,0,2
Japira,4,1,0,0,0
Japura,9,2,0,4,4
Jardim Alegre,8,2,0,0,0
Jardim Olinda,0,0,0,0,0
Jataizinho,5,3,3,0,3
Jesuitas,2,2,1,2,3
Joaquim Tavora,14,1,0,2,2
Jundiai Do Sul,2,0,1,0,1
Juranda,3,0,0,0,0
Jussara,1,0,0,0,0
Kalore,3,0,0,0,0
Lapa,38,14,3,10,13
Laranjal,0,1,1,0,1
Laranjeiras Do Sul,22,2,2,2,4
Leopolis,0,0,0,0,0
Lidianopolis,3,0,0,0,0
Lindoeste,0,0,0,0,0
Loanda,11,3,3,2,5
Lobato,1,1,0,3,3
Londrina,1063,188,222,258,480
Luiziana,1,0,1,0,1
Lunardelli,2,2,0,0,0
Lupionopolis,1,0,0,1,1
Mallet,8,5,1,0,1
Mambore,8,2,0,3,3
Mandaguacu,24,4,0,12,12
Mandaguari,37,12,2,20,22
Mandirituba,16,3,3,1,4
Manfrinopolis,1,0,0,0,0
Mangueirinha,6,0,3,1,4
Manoel Ribas,8,2,0,0,0
Marechal Candido Rondon,29,12,4,6,10
Maria Helena,0,0,1,0,1
Marialva,39,2,4,10,14
Marilandia Do Sul,6,1,1,0,1
Marilena,1,2,1,0,1
Mariluz,2,1,0,0,0
Maringa,728,162,90,520,610
Mariopolis,5,1,0,1,1
Maripa,8,0,2,2,4
Marmeleiro,10,0,2,1,3
Marquinho,0,0,0,0,0
Marumbi,0,0,0,0,0
Matelandia,12,4,0,0,0
Matinhos,32,8,7,5,12
Mato Rico,1,0,0,0,0
Maua Da Serra,4,0,1,0,1
Medianeira,52,7,10,2,12
Mercedes,2,1,0,1,1
Mirador,0,0,0,0,0
Miraselva,0,0,0,0,0
Missal,7,2,2,2,4
Moreira Sales,7,0,1,1,2
Morretes,27,4,1,6,7
Munhoz De Melo,0,0,0,4,4
Nossa Senhora Das Gracas,2,0,0,1,1
Nova Alianca Do Ivai,0,0,0,0,0
Nova America Da Colina,2,0,0,1,1
Nova Aurora,9,1,4,4,8
Nova Cantu,1,2,0,0,0
Nova Esperanca,16,6,4,8,12
Nova Esperanca Do Sudoeste,4,0,0,0,0
Nova Fatima,4,1,0,1,1
Nova Laranjeiras,6,2,0,1,1
Nova Londrina,5,0,2,2,4
Nova Olimpia,4,1,0,0,0
Nova Prata Do Iguacu,1,0,2,0,2
Nova Santa Barbara,1,0,0,0,0
Nova Santa Rosa,5,0,0,0,0
Nova Tebas,5,0,0,1,1
Novo Itacolomi,1,0,0,0,0
Ortigueira,6,0,2,1,3
Ourizona,3,1,1,1,2
Ouro Verde Do Oeste,6,0,0,2,2
Paicandu,31,8,5,16,21
Palmas,15,6,2,2,4
Palmeira,19,2,1,1,2
Palmital,4,0,0,1,1
Palotina,17,4,3,6,9
Paraiso Do Norte,8,1,1,0,1
Paranacity,4,1,0,3,3
Paranagua,110,27,23,7,30
Paranapoema,1,0,0,0,0
Paranavai,52,13,9,14,23
Pato Bragado,2,1,0,0,0
Pato Branco,101,19,26,13,39
Paula Freitas,0,1,0,0,0
Paulo Frontin,1,4,0,1,1
Peabiru,10,0,2,0,2
Perobal,8,1,4,0,4
Perola,0,0,0,1,1
Perola D'Oeste,6,3,3,0,3
Pien,5,0,0,2,2
Pinhais,214,30,43,25,68
Pinhal De Sao Bento,0,1,0,0,0
Pinhalao,1,0,0,0,0
Pinhao,9,4,0,1,1
Pirai Do Sul,17,7,4,4,8
Piraquara,135,18,19,9,28
Pitanga,12,7,2,0,2
Pitangueiras,3,1,0,1,1
Planaltina Do Parana,3,0,1,0,1
Planalto,8,5,2,1,3
Ponta Grossa,456,89,85,67,152
Pontal Do Parana,23,6,6,5,11
Porecatu,8,1,1,1,2
Porto Amazonas,10,0,1,0,1
Porto Barreiro,3,1,2,0,2
Porto Rico,0,0,0,0,0
Porto Vitoria,1,0,0,0,0
Prado Ferreira,3,0,1,0,1
Pranchita,2,1,0,0,0
Presidente Castelo Branco,4,0,0,2,2
Primeiro De Maio,3,2,0,0,0
Prudentopolis,32,5,2,4,6
Quarto Centenario,0,1,0,0,0
Quatigua,10,1,0,1,1
Quatro Barras,20,4,5,1,6
Quatro Pontes,1,0,0,0,0
Quedas Do Iguacu,18,1,2,1,3
Querencia Do Norte,1,0,0,0,0
Quinta Do Sol,1,0,0,1,1
Quitandinha,9,0,2,1,3
Ramilandia,1,1,1,0,1
Rancho Alegre,2,0,1,0,1
Rancho Alegre D'Oeste,4,0,0,0,0
Realeza,12,0,2,0,2
Reboucas,7,1,1,0,1
Renascenca,3,0,0,0,0
Reserva,17,6,5,0,5
Reserva Do Iguacu,1,2,0,1,1
Ribeirao Claro,10,0,2,2,4
Ribeirao Do Pinhal,11,3,2,1,3
Rio Azul,16,2,0,0,0
Rio Bom,2,0,0,0,0
Rio Bonito Do Iguacu,8,0,0,0,0
Rio Branco Do Ivai,1,0,1,0,1
Rio Branco Do Sul,11,4,3,0,3
Rio Negro,32,5,12,0,12
Rolandia,63,7,8,6,14
Roncador,6,0,1,1,2
Rondon,3,1,0,0,0
Rosario Do Ivai,0,1,0,0,0
Sabaudia,7,0,0,0,0
Salgado Filho,2,1,0,0,0
Salto Do Itarare,2,0,0,0,0
Salto Do Lontra,11,1,0,1,1
Santa Amelia,0,1,0,0,0
Santa Cecilia Do Pavao,2,0,0,0,0
Santa Cruz De Monte Castelo,1,1,0,1,1
Santa Fe,4,0,0,0,0
Santa Helena,16,3,7,2,9
Santa Ines,1,0,0,2,2
Santa Isabel Do Ivai,1,0,0,0,0
Santa Izabel Do Oeste,3,1,0,0,0
Santa Lucia,2,0,0,0,0
Santa Maria Do Oeste,1,1,0,0,0
Santa Mariana,10,2,0,1,1
Santa Monica,0,0,0,0,0
Santa Tereza Do Oeste,13,2,4,0,4
Santa Terezinha De Itaipu,13,2,2,3,5
Santana Do Itarare,2,0,0,0,0
Santo Antonio Da Platina,28,7,7,9,16
Santo Antonio Do Caiua,0,0,0,1,1
Santo Antonio Do Paraiso,0,0,0,0,0
Santo Antonio Do Sudoeste,7,3,0,1,1
Santo Inacio,1,0,1,0,1
Sao Carlos Do Ivai,2,2,0,1,1
Sao Jeronimo Da Serra,1,0,0,2,2
Sao Joao,9,2,0,0,0
Sao Joao Do Caiua,2,2,1,0,1
Sao Joao Do Ivai,4,2,1,2,3
Sao Joao Do Triunfo,9,0,0,0,0
Sao Jorge Do Ivai,3,2,1,3,4
Sao Jorge Do Patrocinio,1,0,0,1,1
Sao Jorge D'Oeste,2,1,0,0,0
Sao Jose Da Boa Vista,7,4,1,1,2
Sao Jose Das Palmeiras,0,0,0,0,0
Sao Jose Dos Pinhais,500,92,95,50,145
Sao Manoel Do Parana,2,1,0,0,0
Sao Mateus Do Sul,29,11,13,2,15
Sao Miguel Do Iguacu,21,7,7,2,9
Sao Pedro Do Iguacu,1,1,0,1,1
Sao Pedro Do Ivai,4,0,0,1,1
Sao Pedro Do Parana,0,0,0,0,0
Sao Sebastiao Da Amoreira,2,1,2,1,3
Sao Tome,4,0,0,0,0
Sapopema,1,0,0,0,0
Sarandi,102,24,5,48,53
Saudade Do Iguacu,2,0,0,1,1
Senges,6,2,1,1,2
Serranopolis Do Iguacu,10,1,3,0,3
Sertaneja,2,0,0,0,0
Sertanopolis,9,0,0,2,2
Siqueira Campos,18,1,1,3,4
Sulina,5,0,0,0,0
Tamarana,1,1,0,0,0
Tamboara,2,1,0,0,0
Tapejara,2,1,0,0,0
Tapira,2,0,0,0,0
Teixeira Soares,9,2,2,0,2
Telemaco Borba,49,7,13,10,23
Terra Boa,7,4,0,5,5
Terra Rica,6,1,0,5,5
Terra Roxa,7,3,1,0,1
Tibagi,7,2,1,0,1
Tijucas Do Sul,16,4,1,1,2
Toledo,148,23,17,23,40
Tomazina,1,0,0,0,0
Tres Barras Do Parana,3,3,1,0,1
Tunas Do Parana,1,1,0,0,0
Tuneiras Do Oeste,0,1,0,1,1
Tupassi,2,0,0,0,0
Turvo,15,4,1,0,1
Ubirata,4,6,0,3,3
Umuarama,97,28,15,19,34
Uniao Da Vitoria,67,7,6,4,10
Uniflor,1,0,0,1,1
Urai,6,2,1,0,1
Ventania,6,0,0,0,0
Vera Cruz Do Oeste,0,0,0,1,1
Vere,8,2,1,1,2
Virmond,2,0,0,0,0
Vitorino,8,2,4,0,4
Wenceslau Braz,16,3,5,4,9
Xambre,5,1,0,0,0
Total,13577,2744,2672,2429,5101`

//initialize table
var table = new Tabulator("#example-table", {
    data:tabledata, //assign data to table
    importFormat:"csv",
    height:"311px",
    layout:"fitColumns",
    resizableColumnFit:true,
    autoColumns:true, //create columns from data field names
});