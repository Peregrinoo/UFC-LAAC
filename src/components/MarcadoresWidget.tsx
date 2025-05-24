import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Image,
  Text,
  Button,
  Modal,
  Stack,
  Accordion, 
  Input,
  Group,
  SegmentedControl,
} from '@mantine/core';
import { useState } from 'react';
import wellcome from '../assets/card_image.jpeg';

// Define types for our data structure
type Farmaco = {
  nome: string;
  classe: string;
  indicacoes: string;
  mecanismo: string;
  resultado: string;
};

type Marcador = {
  nome: string;
  descricao: string;
  descricaoDetalhada: string;
  farmacos: Farmaco[];
};

// Custom hook to store and manage marcadores data
const useMarcadoresData = () => {
  const marcadores: Marcador[] = [
    {
      nome: "Ureia",
      descricao: "Avalia a função renal através da quantidade de ureia no sangue.",
      descricaoDetalhada: "A ureia é o principal metabólito nitrogenado resultante do catabolismo proteico. Embora seja um marcador amplamente utilizado da função renal, é um preditor limitado da taxa de filtração glomerular (TFG), já que entre 40% e 70% da ureia filtrada retorna ao plasma por difusão passiva, processo influenciado pelo fluxo urinário. Clinicamente, é útil para o cálculo da relação ureia:creatinina, que normalmente é em torno de 30. Essa relação tende a aumentar (>40–50) em situações como desidratação, insuficiência cardíaca congestiva, febre prolongada ou uso inadequado de diuréticos intravenosos.",
      farmacos: [
        {
          nome: "Aciclovir",
          classe: "Antiviral",
          indicacoes: "Tratamento de infecções pelos vírus Herpes simplex, Herpes zoster e Varicella zoster, além da profilaxia em pacientes imunocomprometidos e supressão em pacientes imunocompetentes. Também é indicado na profilaxia de infecções por CMV em transplantados de medula óssea e no tratamento da meningoencefalite herpética.",
          mecanismo: "Por ser excretado predominantemente pelos rins, o aciclovir pode formar cristais nos túbulos renais em altas concentrações, levando à nefropatia por cristalização. Essa obstrução ou lesão tubular reduz a TFG, resultando na retenção de ureia e outros compostos nitrogenados.",
          resultado: "Aumento dos níveis de ureia."
        },
        {
          nome: "Ciclosporina",
          classe: "Imunossupressor",
          indicacoes: "Utilizada na prevenção da rejeição de órgãos transplantados (rim, fígado, coração, pulmão, pâncreas), após transplante de medula óssea e em doenças autoimunes. Também é indicada para tratar a reação enxerto versus hospedeiro.",
          mecanismo: "Induz vasoconstrição da arteríola aferente, o que reduz a TFG e compromete a excreção de ureia. O uso prolongado pode causar fibrose intersticial e atrofia tubular, agravando o comprometimento renal.",
          resultado: "Aumento dos níveis de ureia."
        },
        {
          nome: "Calcitriol",
          classe: "Vitamina D",
          indicacoes: "Tratamento de osteoporose, osteodistrofia renal em insuficiência renal crônica, hipoparatireoidismo (pós-operatório, idiopático, pseudo), raquitismo dependente ou resistente à vitamina D.",
          mecanismo: "Em excesso, pode causar hipercalcemia, levando à nefrocalcinose. Essa condição compromete a função renal e reduz a TFG, aumentando a concentração de ureia no sangue.",
          resultado: "Aumento dos níveis de ureia."
        },
        {
          nome: "Captopril, Enalapril e Lisinopril",
          classe: "Inibidores da Enzima Conversora de Angiotensina (IECA)",
          indicacoes: "Tratamento da hipertensão arterial, insuficiência cardíaca congestiva, infarto agudo do miocárdio e nefropatia diabética.",
          mecanismo: "Os IECA reduzem a ação da angiotensina II, que normalmente contrai a arteríola eferente para manter a pressão de filtração glomerular. Com a vasodilatação da arteríola eferente, a TFG diminui, podendo haver retenção de ureia.",
          resultado: "Aumento dos níveis de ureia."
        },
        {
          nome: "Carbamazepina",
          classe: "Anticonvulsivante",
          indicacoes: "Tratamento da epilepsia, transtorno bipolar, abstinência alcoólica, neuralgias idiopáticas (trigêmeo e glossofaríngea), neuropatia diabética, diabetes insipidus central e poliúria/polidipsia.",
          mecanismo: "O aumento da ureia sérica é raro, mas pode ocorrer devido a efeitos adversos como hiponatremia induzida por SIADH, nefrite intersticial ou rabdomiólise.",
          resultado: "Aumento dos níveis de ureia."
        },
        {
          nome: "Furosemida",
          classe: "Diurético de alça",
          indicacoes: "Indicada no tratamento de hipertensão, edemas (cardíaco, hepático, renal, queimaduras), insuficiência cardíaca aguda, edemas cerebrais, gestose, crises hipertensivas e intoxicações com necessidade de diurese forçada.",
          mecanismo: "Pode causar hipovolemia e reduzir a TFG (azotemia pré-renal), além de estimular a reabsorção tubular de ureia, promovendo aumento de seus níveis séricos.",
          resultado: "Aumento dos níveis de ureia."
        },
        {
          nome: "Gentamicina",
          classe: "Aminoglicosídeo",
          indicacoes: "Tratamento de infecções graves por bactérias sensíveis, especialmente gram-negativas (como Pseudomonas, Proteus, Serratia) e gram-positivas (Staphylococcus). Atua em infecções ósseas, cutâneas, respiratórias, urinárias, abdominais, endocardite infecciosa e sepse.",
          mecanismo: "Acumula-se nos túbulos proximais renais, onde pode provocar necrose tubular aguda. Essa lesão compromete a filtração glomerular, resultando em retenção de ureia.",
          resultado: "Aumento dos níveis de ureia."
        }
      ]
    },
    {
      "nome": "Creatinina",
      "descricao": "Indica a eficiência dos rins na filtração do sangue.",
      "descricaoDetalhada": "A creatinina é um produto residual da creatina e da fosfocreatina oriunda do metabolismo muscular e da ingestão de carne. Aproximadamente 98% da creatina é mantida no músculo e 1,6% a 1,7% desta é convertida em creatinina por dia, que é livremente filtrada pelo glomérulo, sem sofrer reabsorção e metabolização pelo rim, sendo rapidamente excretada. Alterações no valor da creatinina sérica (valores acima de 1,3 mg/dL) só ocorrem a partir de diminuição da ordem de 50%-60% da TFG. O relativo descompasso da creatinina com o real estado funcional e sua baixa sensibilidade e especificidade se traduzem em diagnóstico e tratamento tardios.",
      "farmacos": [
        {
          "nome": "Aciclovir",
          "classe": "Antiviral",
          "indicacoes": "Tratamento de infecções pelos vírus Herpes simplex, Herpes zoster e Varicella zoster, assim como supressão em pacientes imunocompetentes e profilaxia em indivíduos imunocomprometidos. Indicado também para profilaxia de infecções pelo vírus CMV em pacientes transplantados de medula óssea e tratamento de meningoencefalite herpética.",
          "mecanismo": "O aciclovir pode aumentar a creatinina sérica ao causar cristalização nos túbulos renais e lesão tubular, levando à redução da filtração glomerular.",
          "resultado": "Aumento dos níveis de creatinina."
        },
        {
          "nome": "Anfotericina B",
          "classe": "Aminoglicosídeo",
          "indicacoes": "Terapia empírica para infecção fúngica; tratamento de infecções causadas por fungos suscetíveis, tratamento de alguns casos de leishmaniose mucocutânea americana e terapia primária de leishmaniose visceral em adultos e crianças imunocompetentes.",
          "mecanismo": "Redução da perfusão renal (via vasoconstrição da arteríola aferente) e necrose tubular direta (apresenta ação tóxica para as células epiteliais do túbulo proximal), levando à diminuição da filtração glomerular.",
          "resultado": "Aumento dos níveis de creatinina."
        },
        {
          "nome": "Captopril, Enalapril e Lisinopril",
          "classe": "Inibidores da Enzima Conversora de Angiotensina",
          "indicacoes": "Tratamento da hipertensão, insuficiência cardíaca congestiva, infarto do miocárdio e nefropatia diabética.",
          "mecanismo": "Vasodilatação da arteríola eferente glomerular, reduzindo a pressão de filtração. O efeito é geralmente hemodinâmico e reversível, mas pode ser perigoso em certas condições clínicas.",
          "resultado": "Aumento dos níveis de creatinina."
        },
        {
          "nome": "Ciclosporina",
          "classe": "Imunossupressor",
          "indicacoes": "Prevenção da rejeição de órgãos em transplante de rim, fígado, coração, pulmão ou pâncreas; prevenção da rejeição do enxerto após TMO e prevenção/tratamento da reação enxerto versus hospedeiro; doenças autoimunes.",
          "mecanismo": "Vasoconstrição da arteríola aferente renal por meio do aumento da produção de endotelina e redução de óxido nítrico e prostaglandinas, e lesão tubular crônica, reduzindo a taxa de filtração glomerular.",
          "resultado": "Aumento dos níveis de creatinina."
        },
        {
          "nome": "Cefalexina",
          "classe": "Cefalosporina de primeira geração",
          "indicacoes": "Tratamento de infecções bacterianas suscetíveis, principalmente infecções de pele, urinárias e respiratórias.",
          "mecanismo": "Pode causar um leve aumento da creatinina sérica por competição tubular (sem lesão renal real) ou se acumular em pacientes com função renal reduzida.",
          "resultado": "Aumento dos níveis de creatinina."
        },
        {
          "nome": "Gentamicina",
          "classe": "Aminoglicosídeo",
          "indicacoes": "Tratamento de infecções bacterianas sensíveis, normalmente organismos gram-negativos, incluindo Pseudomonas, Proteus, Serratia e gram-positivo Staphylococcus; tratamento de infecções dos ossos, pele e tecidos moles, infecções do trato respiratório, do trato urinário, intra-abdominal, de endocardite infecciosa e sepse.",
          "mecanismo": "Necrose tubular aguda, por acúmulo e toxicidade direta no túbulo proximal, reduzindo a TFG.",
          "resultado": "Aumento dos níveis de creatinina."
        }
      ]
    },
    {
      "nome": "Fosfatase Alcalina",
      "descricao": "Enzima associada a ossos, fígado e vias biliares.",
      "descricaoDetalhada": "A fosfatase alcalina (ALP) compreende um grupo de enzimas fosfoidrolases que apresentam atividade máxima em pH alcalino, próximo de 10,0. Está localizada predominantemente em superfícies de troca como o epitélio intestinal, túbulos renais, barreira hematoencefálica e placenta. Cada tecido apresenta uma isoenzima, de modo que a ALP dosada no plasma é resultado da soma das diferentes isoenzimas presentes no organismo, com predomínio das frações ósseas e hepáticas. As condições fisiopatológicas em que os níveis plasmáticos de ALP estão aumentados são, por exemplo, as hepatopatias, principalmente aquelas envolvidas na obstrução do trato biliar, carcinomas hepáticos, primário e secundário, também refletem aumento de ALP plasmática. As morbidades envolvendo o tecido ósseo, como a Doença de Paget, também podem ser rastreadas por meio do exame de fosfatase alcalina plasmática.",
      "farmacos": [
        {
          "nome": "Amoxicilina",
          "classe": "Penicilina de amplo espectro",
          "indicacoes": "Tratamento da otite média, sinusite e infecções causadas por organismos susceptíveis, envolvendo o trato respiratório superior e inferior, pele e trato urinário; profilaxia de endocardite infecciosa em pacientes submetidos a procedimentos cirúrgicos ou odontológicos e como parte do regime de tratamento do H. pylori e periodontite.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Clorpromazina",
          "classe": "Neuroléptico",
          "indicacoes": "Quadros psiquiátricos, psicoses, ansiedade e agitação, soluços incoercíveis, náuseas e vômitos, neurotoxicoses infantis, adjuvante no tratamento do tétano, pré-anestésico, analgesia obstétrica e eclâmpsia.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Aciclovir",
          "classe": "Antiviral",
          "indicacoes": "Tratamento de infecções pelos vírus Herpes simplex, Herpes zoster e Varicella zoster, assim como supressão em pacientes imunocompetentes e profilaxia em indivíduos imunocomprometidos. Indicado também para profilaxia de infecções pelo vírus CMV em pacientes transplantados de medula óssea e tratamento de meningoencefalite herpética.",
          "mecanismo": "Aumento da função hepática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Mirtazapina",
          "classe": "Antidepressivo",
          "indicacoes": "Tratamento da depressão.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Fluoxetina",
          "classe": "Inibidor Seletivo da Recaptação de Serotonina (ISRS)",
          "indicacoes": "Depressão, bulimia nervosa, transtorno obsessivo-compulsivo (TOC), transtorno disfórico pré-menstrual, síndrome do pânico.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Amitriptilina",
          "classe": "Antidepressivo tricíclico",
          "indicacoes": "Depressão e enurese noturna para crianças acima de 12 anos.",
          "mecanismo": "Lesão hepática mista e hipersensibilidade hepática idiossincrática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Azatioprina",
          "classe": "Imunossupressor",
          "indicacoes": "Prevenção de rejeição em transplantes de órgãos, artrite reumatoide grave refratária, doenças autoimunes.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Clindamicina",
          "classe": "Antimicrobiano",
          "indicacoes": "Tratamento de infecções respiratórias, pele, tecidos moles, dentárias, ginecológicas, ósseas e articulares, e anaeróbias susceptíveis.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Captopril e Enalapril",
          "classe": "Inibidores da Enzima Conversora de Angiotensina (IECA)",
          "indicacoes": "Hipertensão, insuficiência cardíaca congestiva, infarto do miocárdio, nefropatia diabética.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Nitrofurantoína",
          "classe": "Antimicrobiano",
          "indicacoes": "Prevenção e tratamento de infecções urinárias causadas por cepas sensíveis de E. coli, S. aureus, Enterococcus, Klebsiella e Enterobacter.",
          "mecanismo": "Lesão hepática colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Carbamazepina",
          "classe": "Anticonvulsivante",
          "indicacoes": "Epilepsia, distúrbio bipolar, abstinência alcoólica, neuralgia do trigêmeo, diabetes insípido e poliúria.",
          "mecanismo": "Hepatotoxicidade e lesão hepática mista.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Eritromicina",
          "classe": "Macrolídeo",
          "indicacoes": "Infecções respiratórias, de pele, clamídia, sífilis, gonorreia, infecções não gonocócicas e outros.",
          "mecanismo": "Lesão colestática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Fenitoína",
          "classe": "Anticonvulsivante",
          "indicacoes": "Crises convulsivas generalizadas e parciais.",
          "mecanismo": "Hepatotoxicidade e lesão hepática mista.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Fenobarbital",
          "classe": "Anticonvulsivante",
          "indicacoes": "Crises convulsivas, estado epilético, pré-anestesia e sedação.",
          "mecanismo": "Hepatotoxicidade e lesão hepática mista.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Isoniazida",
          "classe": "Tuberculostático",
          "indicacoes": "Tratamento e profilaxia da tuberculose.",
          "mecanismo": "Hepatotoxicidade.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Metotrexato",
          "classe": "Antimetabólito",
          "indicacoes": "Cânceres, artrite reumatoide, psoríase.",
          "mecanismo": "Hepatotoxicidade.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Metoprolol",
          "classe": "Beta-Bloqueador",
          "indicacoes": "Hipertensão, arritmias, angina, insuficiência cardíaca, enxaqueca.",
          "mecanismo": "Aumento da atividade hepática.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Trazodona",
          "classe": "Antidepressivo",
          "indicacoes": "Depressão com ansiedade, dor neurogênica, dor crônica.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        },
        {
          "nome": "Sulfametoxazol + Trimetoprima",
          "classe": "Trimetoprima em associação com sulfas",
          "indicacoes": "Infecções respiratórias, urinárias, gastrointestinais e profilaxia em pacientes imunocomprometidos.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de fosfatase alcalina."
        }
      ]
    },
    {
      "nome": "Aspartato Aminotransferase (AST)",
      "descricao": "Marcador para diagnóstico de danos celulares no fígado, coração e músculos.",
      "descricaoDetalhada": "A AST é uma enzima que está presente tanto no citosol quanto nas mitocôndrias das células, especialmente no fígado, coração e músculos. A versão mitocondrial da AST, que é mais importante para o diagnóstico de lesões hepáticas, é liberada na corrente sanguínea quando há dano à célula. Então, quando há aumento da AST, ela pode ser um indicativo de dano celular, não só no fígado, mas também em outros órgãos, dependendo da forma da enzima liberada.",
      "farmacos": [
        {
          "nome": "Paracetamol",
          "classe": "Analgésico e antitérmico",
          "indicacoes": "Alívio de dor leve a moderada (como dor de cabeça, dor muscular, dores articulares) e redução da febre.",
          "mecanismo": "Hepatotoxicidade.",
          "resultado": "Aumento dos níveis de AST."
        },
        {
          "nome": "Enalapril",
          "classe": "Inibidor da enzima conversora de angiotensina (IECA)",
          "indicacoes": "Tratamento de hipertensão, insuficiência cardíaca congestiva, e proteção renal em pacientes com diabetes.",
          "mecanismo": "Hepatotoxicidade.",
          "resultado": "Aumento dos níveis de AST."
        },
        {
          "nome": "Diltiazem",
          "classe": "Bloqueador dos canais de cálcio",
          "indicacoes": "Tratamento de hipertensão, angina e algumas arritmias cardíacas, como fibrilação atrial.",
          "mecanismo": "Hepatotoxicidade.",
          "resultado": "Aumento dos níveis de AST."
        },
        {
          "nome": "Aciclovir",
          "classe": "Antiviral (análogo de nucleosídeo)",
          "indicacoes": "Tratamento de infecções causadas pelo vírus herpes simples, como herpes labial, herpes genital, e varicela-zóster.",
          "mecanismo": "Aumento da função hepática.",
          "resultado": "Aumento dos níveis de AST."
        },
        {
          "nome": "Fenobarbital",
          "classe": "Barbitúrico (sedativo e anticonvulsivante)",
          "indicacoes": "Tratamento de convulsões (epilepsia), distúrbios de sono (insônia), e como sedativo em algumas condições.",
          "mecanismo": "Aumento da função hepática por lesão hepática mista.",
          "resultado": "Aumento dos níveis de AST."
        }
      ]
    },
    {
      "nome": "Gama-GT",
      "descricao": "Indica lesão hepática, especialmente por álcool ou medicamentos.",
      "descricaoDetalhada": "A gama-glutamil transferase (GGT) é uma enzima presente principalmente no fígado e nas vias biliares. É um marcador sensível de dano hepático, especialmente relacionado ao consumo crônico de álcool e ao uso de medicamentos que induzem enzimas hepáticas. Seus níveis também podem se elevar mesmo na ausência de lesão hepática significativa, devido à indução enzimática.",
      "farmacos": [
        {
          "nome": "Fenitoína",
          "classe": "Antiepiléptico",
          "indicacoes": "Tratamento de epilepsia.",
          "mecanismo": "Induz a atividade das enzimas do sistema microssomal hepático do citocromo P450.",
          "resultado": "Aumento dos níveis de GGT."
        },
        {
          "nome": "Fenobarbital",
          "classe": "Barbitúrico",
          "indicacoes": "Tratamento de epilepsia e crises convulsivas.",
          "mecanismo": "Induz o aumento da atividade das enzimas hepáticas relacionadas ao citocromo P450.",
          "resultado": "Aumento dos níveis de GGT."
        },
        {
          "nome": "Rifampicina",
          "classe": "Antibiótico",
          "indicacoes": "Tratamento de infecções bacterianas graves como a tuberculose.",
          "mecanismo": "Indutor enzimático hepático, aumentando a atividade do citocromo P450.",
          "resultado": "Aumento dos níveis de GGT."
        },
        {
          "nome": "Amitriptilina",
          "classe": "Antidepressivo tricíclico",
          "indicacoes": "Tratamento de quadros depressivos.",
          "mecanismo": "Estímulo da atividade hepática.",
          "resultado": "Leve aumento dos níveis de GGT."
        },
        {
          "nome": "Atorvastatina",
          "classe": "Estatina",
          "indicacoes": "Controle de colesterol elevado.",
          "mecanismo": "Induz estresse hepático, levando a alterações no metabolismo hepático.",
          "resultado": "Leve aumento dos níveis de GGT."
        }
      ]
    },
    {
      "nome": "ALT",
      "descricao": "Enzima encontrada no fígado; detecta danos hepáticos (TGP).",
      "descricaoDetalhada": "A alanina aminotransferase (ALT) é uma enzima localizada principalmente nas células do fígado. Elevações nos níveis séricos de ALT são altamente específicas para dano hepático, refletindo lesão hepatocelular.",
      "farmacos": [
        {
          "nome": "Isoniazida",
          "classe": "Antibiótico",
          "indicacoes": "Tratamento da tuberculose.",
          "mecanismo": "Pode causar hepatotoxicidade, elevando os níveis de ALT.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Alopurinol",
          "classe": "Inibidor da xantina oxidase",
          "indicacoes": "Gota e hiperuricemia associada à quimioterapia.",
          "mecanismo": "Lesão hepatocelular.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Amiodarona",
          "classe": "Antiarrítmico (Classe III)",
          "indicacoes": "Arritmias cardíacas, como fibrilação atrial e taquicardia ventricular.",
          "mecanismo": "Lesão hepatocelular.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Captopril",
          "classe": "Inibidor da enzima conversora de angiotensina (IECA)",
          "indicacoes": "Hipertensão, insuficiência cardíaca, nefropatia diabética.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Enalapril",
          "classe": "Inibidor da enzima conversora de angiotensina (IECA)",
          "indicacoes": "Hipertensão, insuficiência cardíaca, nefropatia diabética.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Losartana",
          "classe": "Antagonista dos receptores da angiotensina II (ARA II)",
          "indicacoes": "Hipertensão, insuficiência cardíaca, proteção renal.",
          "mecanismo": "Lesão hepatocelular.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Fenitoína",
          "classe": "Antiepiléptico",
          "indicacoes": "Tratamento de crises epilépticas e prevenção de crises após neurocirurgia.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Carbamazepina",
          "classe": "Antiepiléptico",
          "indicacoes": "Epilepsia, neuralgia do trigêmeo, transtorno bipolar.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Sulfonamidas",
          "classe": "Antibióticos (sulfamidas)",
          "indicacoes": "Infecções bacterianas, como infecções urinárias e otite média.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Trazodona",
          "classe": "Antidepressivo (modulador de serotonina)",
          "indicacoes": "Depressão, distúrbios de ansiedade, insônia.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Sulfametoxazol",
          "classe": "Antibiótico (sulfonamida)",
          "indicacoes": "Infecções urinárias, respiratórias e gastrointestinais.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Diltiazem",
          "classe": "Bloqueador de canal de cálcio",
          "indicacoes": "Hipertensão, angina, arritmias cardíacas.",
          "mecanismo": "Hepatotoxicidade.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Trimetoprim",
          "classe": "Antibiótico (inibidor da síntese de folato)",
          "indicacoes": "Infecções urinárias e respiratórias.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Nitrofurantoína",
          "classe": "Antibiótico (nitrofuranato)",
          "indicacoes": "Infecções urinárias não complicadas.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        },
        {
          "nome": "Clindamicina",
          "classe": "Antibiótico (lincosamida)",
          "indicacoes": "Infecções por bactérias anaeróbias, infecções de pele e tecidos moles.",
          "mecanismo": "Lesão hepática mista.",
          "resultado": "Aumento dos níveis de ALT."
        }
      ]
    },
    {
      "nome": "Colesterol Total",
      "descricao": "Exame que demonstra a concentração de 3 tipos de colesterol encontrados na corrente sanguínea: LDL, HDL e VLDL.",
      "descricaoDetalhada": "O LDL (Low Density Lipoprotein) são lipoproteínas de baixa densidade que carregam a maior parte do colesterol para síntese de hormônios e outras substâncias. O HDL (High Density Lipoprotein) são lipoproteínas de alta densidade responsáveis por limpar as artérias, retirando o excesso de colesterol. O VLDL (Very Low Density Lipoprotein) são lipoproteínas de baixíssima densidade que carregam colesterol e triglicerídeos para as células.",
      "farmacos": [
        {
          "nome": "Estanozolol",
          "classe": "Esteroides anabolizantes",
          "indicacoes": "Melhorar a performance e favorecer o ganho de peso.",
          "mecanismo": "Alteração da função hepática.",
          "resultado": "Diminuição de c-HDL e aumento de c-LDL."
        },
        {
          "nome": "Fenotiazínicos",
          "classe": "Antipsicóticos",
          "indicacoes": "Tratamento da esquizofrenia e outros transtornos psicóticos.",
          "mecanismo": "Alteração do metabolismo lipídico.",
          "resultado": "Diminuição de c-HDL."
        },
        {
          "nome": "Colestiramina",
          "classe": "Hipolipemiantes",
          "indicacoes": "Redução dos níveis de colesterol em pacientes com hipercolesterolemia.",
          "mecanismo": "Aumento da excreção de ácidos biliares nas fezes e aumento do consumo de colesterol.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Estatinas",
          "classe": "Hipolipemiantes",
          "indicacoes": "Redução do colesterol elevado, especialmente o colesterol LDL.",
          "mecanismo": "Inibição da HMG-CoA redutase e da síntese hepática de colesterol.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Ezetimiba",
          "classe": "Hipolipemiantes",
          "indicacoes": "Regulação dos níveis de colesterol.",
          "mecanismo": "Inibição da absorção intestinal de colesterol.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Levotiroxina",
          "classe": "Hormônio tireoidiano",
          "indicacoes": "Tratamento de pacientes com hipotireoidismo.",
          "mecanismo": "Aumento da excreção de ácidos biliares nas fezes e aumento do consumo de colesterol.",
          "resultado": "Aumento do metabolismo do colesterol."
        },
        {
          "nome": "Ômega 3",
          "classe": "Ácido graxo",
          "indicacoes": "Suplemento para doenças cardiovasculares, hipertrigliceridemia e artrite reumatoide.",
          "mecanismo": "Redução da lipemia pós-prandial e da síntese de VLDL e Apo B-100.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Fibratos",
          "classe": "Hipolipemiantes",
          "indicacoes": "Tratamento de hipertrigliceridemia e dislipidemia mista.",
          "mecanismo": "Aumento da expressão de receptores hepáticos de LDL.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Ácido nicotínico",
          "classe": "Vitaminas do complexo B",
          "indicacoes": "Tratamento de hipercolesterolemia e dislipidemia mista.",
          "mecanismo": "Inibição da liberação de ácidos graxos pelos adipócitos e da síntese hepática de colesterol.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Metformina",
          "classe": "Hipoglicemiantes",
          "indicacoes": "Tratamento de diabetes.",
          "mecanismo": "Aumento do metabolismo lipídico.",
          "resultado": "Diminuição de c-LDL."
        },
        {
          "nome": "Lopinavir",
          "classe": "Inibidor de protease",
          "indicacoes": "Antirretroviral.",
          "mecanismo": "Diminuição do metabolismo lipídico.",
          "resultado": "Aumento de c-LDL."
        },
        {
          "nome": "Ritonavir",
          "classe": "Inibidor de protease",
          "indicacoes": "Antirretroviral.",
          "mecanismo": "Diminuição do metabolismo lipídico.",
          "resultado": "Aumento de c-LDL."
        },
        {
          "nome": "Isotretinoína",
          "classe": "Retinoides",
          "indicacoes": "Tratamento de acne grave.",
          "mecanismo": "Aumento da síntese de LDL e da absorção de lipídios da dieta.",
          "resultado": "Aumento de c-LDL."
        },
        {
          "nome": "Contraceptivos orais (Estrógeno e Progesterona)",
          "classe": "Anticoncepcional hormonal",
          "indicacoes": "Reposição hormonal.",
          "mecanismo": "Alteração do metabolismo das lipoproteínas.",
          "resultado": "Aumento de c-LDL."
        }
      ]
    },
    {
      "nome": "Triglicerídeos",
      "descricao": "Exame que demonstra a concentração de triglicerídeos na corrente sanguínea.",
      "descricaoDetalhada": "Triglicerídeos são gorduras que armazenam energia e podem ser encontradas tanto no tecido adiposo quanto na corrente sanguínea, sendo transportados pelo VLDL (Very Low Density Lipoprotein).",
      "farmacos": [
        {
          "nome": "Ácido nicotínico",
          "classe": "Vitaminas do complexo B",
          "indicacoes": "Regulação dos níveis de colesterol.",
          "mecanismo": "Inibição da liberação de ácidos graxos pelos adipócitos e da síntese hepática de triglicérides.",
          "resultado": "Diminuição de triglicérides."
        },
        {
          "nome": "Metformina",
          "classe": "Hipoglicemiantes",
          "indicacoes": "Tratamento de diabetes tipo 2.",
          "mecanismo": "Aumento do metabolismo lipídico.",
          "resultado": "Diminuição de triglicérides."
        },
        {
          "nome": "Fibratos",
          "classe": "Hipolipemiantes",
          "indicacoes": "Regulação dos níveis de colesterol.",
          "mecanismo": "Aumento da oxidação de ácidos graxos e metabolismo lipídico.",
          "resultado": "Diminuição de triglicérides."
        },
        {
          "nome": "Lopinavir",
          "classe": "Inibidor de protease",
          "indicacoes": "Antirretroviral.",
          "mecanismo": "Inibição da síntese hepática de triglicérides.",
          "resultado": "Diminuição de triglicérides."
        },
        {
          "nome": "Ritonavir",
          "classe": "Inibidor de protease",
          "indicacoes": "Antirretroviral.",
          "mecanismo": "Inibição da síntese hepática de triglicérides.",
          "resultado": "Diminuição de triglicérides."
        },
        {
          "nome": "Contraceptivos orais",
          "classe": "Anticoncepcional hormonal",
          "indicacoes": "Controle de natalidade.",
          "mecanismo": "Alteração do metabolismo das lipoproteínas.",
          "resultado": "Aumento de triglicérides."
        },
        {
          "nome": "Isotretinoína",
          "classe": "Retinoides",
          "indicacoes": "Tratamento de acne grave.",
          "mecanismo": "Aumento da síntese de triglicérides.",
          "resultado": "Aumento de triglicérides."
        },
        {
          "nome": "Prednisona",
          "classe": "Glicocorticoides",
          "indicacoes": "Tratamento de doenças inflamatórias e autoimunes.",
          "mecanismo": "Aumento da síntese de ácidos graxos e da atividade da lipase hepática.",
          "resultado": "Aumento de triglicérides."
        },
        {
          "nome": "Prednisolona",
          "classe": "Glicocorticoides",
          "indicacoes": "Tratamento de doenças inflamatórias e autoimunes.",
          "mecanismo": "Aumento da síntese de ácidos graxos e da atividade da lipase hepática.",
          "resultado": "Aumento de triglicérides."
        }
      ]
    },
    {
      "nome": "Ácido Úrico Sérico",
      "descricao": "Subproduto do metabolismo das purinas, excretado predominantemente pelos rins.",
      "descricaoDetalhada": "O ácido úrico é excretado pelos rins e níveis elevados no soro podem indicar gota, disfunções renais ou uso de determinados fármacos. Níveis reduzidos são menos comuns, porém clinicamente relevantes em alguns contextos.",
      "farmacos": [
        {
          "nome": "Enalapril/Captopril",
          "classe": "Inibidores da ECA",
          "indicacoes": "Tratamento da hipertensão arterial e insuficiência cardíaca.",
          "mecanismo": "Reduzem a pressão de filtração glomerular e alteram o fluxo tubular, prejudicando a secreção tubular de ácido úrico, resultando em acúmulo sérico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Hidroclorotiazida",
          "classe": "Diurético tiazídico",
          "indicacoes": "Controle da hipertensão arterial.",
          "mecanismo": "Compete com o ácido úrico nos transportadores tubulares (URAT1), promovendo retenção e hiperuricemia.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Furosemida",
          "classe": "Diurético de alça",
          "indicacoes": "Tratamento da hipertensão arterial.",
          "mecanismo": "Promove contração do volume extracelular e estimula reabsorção tubular de sódio e ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Espironolactona",
          "classe": "Diurético poupador de potássio",
          "indicacoes": "Insuficiência cardíaca congestiva e hiperaldosteronismo.",
          "mecanismo": "Reduz a excreção renal de ácido úrico ao diminuir fluxo distal tubular e alterar transporte tubular.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Metildopa",
          "classe": "Anti-hipertensivo de ação central",
          "indicacoes": "Hipertensão gestacional.",
          "mecanismo": "Inibe a secreção renal de ácido úrico via redução do fluxo renal e competição tubular.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Betabloqueadores",
          "classe": "Anti-hipertensivos e antiarrítmicos",
          "indicacoes": "Tratamento da hipertensão arterial e insuficiência cardíaca.",
          "mecanismo": "Diminuem o débito cardíaco e o fluxo renal, reduzindo a filtração glomerular e excreção de ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Levodopa",
          "classe": "Antiparkinsoniano",
          "indicacoes": "Tratamento da doença de Parkinson.",
          "mecanismo": "Estimula a excreção renal de ácido úrico, reduzindo níveis séricos.",
          "resultado": "Diminuição do ácido úrico sérico."
        },
        {
          "nome": "Fluoxetina/Sertralina",
          "classe": "ISRS",
          "indicacoes": "Tratamento de depressão e ansiedade.",
          "mecanismo": "Reduzem a reabsorção tubular de ácido úrico, diminuindo sua concentração sérica.",
          "resultado": "Diminuição do ácido úrico sérico."
        },
        {
          "nome": "Paracetamol",
          "classe": "Analgésico/Antipirético",
          "indicacoes": "Controle de dor e febre.",
          "mecanismo": "Pode reduzir a depuração renal de ácido úrico, especialmente em pacientes com função hepática comprometida.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Alopurinol",
          "classe": "Inibidor da xantina oxidase",
          "indicacoes": "Tratamento de gota e hiperuricemia.",
          "mecanismo": "Inibe a conversão de hipoxantina e xantina em ácido úrico, reduzindo sua produção.",
          "resultado": "Diminuição do ácido úrico sérico."
        }
      ]
    },
    {
      "nome": "Bilirrubina Total",
      "descricao": "Marcador de função hepática, metabolismo de eritrócitos e função da vesícula biliar.",
      "descricaoDetalhada": "A bilirrubina é um pigmento derivado da degradação da hemoglobina dos glóbulos vermelhos. Pode ser direta (solúvel em água, conjugada pelo fígado) ou indireta (insolúvel em água, não conjugada pelo fígado). O exame mede a soma das duas frações no sangue, e alterações nos valores podem indicar problemas como hepatite, cirrose, anemia hemolítica ou obstruções biliares.",
      "farmacos": [
        {
          "nome": "Ácido Valproico",
          "classe": "Anticonvulsivante",
          "indicacoes": "Tratamento de epilepsia e transtorno bipolar.",
          "mecanismo": "Pode provocar lesão hepatocelular direta.",
          "resultado": "Aumento no valor de bilirrubinas totais."
        },
        {
          "nome": "Anticoncepcionais",
          "classe": "Hormonal",
          "indicacoes": "Para contracepção e reposição hormonal.",
          "mecanismo": "Induz a atividade da colestase intra-hepática.",
          "resultado": "Aumento no valor de bilirrubinas totais."
        },
        {
          "nome": "Metotrexato",
          "classe": "Imunossupressor",
          "indicacoes": "Tratamento de artrite reumatoide, psoríase e de câncer.",
          "mecanismo": "Causa lesão hepatocelular cumulativa.",
          "resultado": "Aumento do valor de bilirrubinas totais."
        },
        {
          "nome": "Rifampicina",
          "classe": "Antibiótico",
          "indicacoes": "Tratamento de infecção bacteriana grave como tuberculose.",
          "mecanismo": "Compete com a excreção de bilirrubina no fígado, inibindo parcialmente os transportadores hepatobiliares.",
          "resultado": "Aumento dos níveis de bilirrubinas totais."
        },
        {
          "nome": "Fenitoína",
          "classe": "Antiepiléptico",
          "indicacoes": "Tratamento de epilepsia.",
          "mecanismo": "Indução das enzimas hepáticas, que gera a sobrecarga do fígado e altera o processo de conjugação da bilirrubina.",
          "resultado": "Aumento dos níveis de bilirrubinas totais."
        },
        {
          "nome": "Estatinas",
          "classe": "Hipolipemiante",
          "indicacoes": "Controle lipídico.",
          "mecanismo": "Causa disfunção hepatocelular, prejudicando a metabolização e excreção da bilirrubina.",
          "resultado": "Pequeno aumento dos níveis de bilirrubinas totais."
        },
        {
          "nome": "Anabolizantes",
          "classe": "Esteroides anabolizantes",
          "indicacoes": "Terapia hormonal.",
          "mecanismo": "Causa lesão nos canalículos biliares, o que dificulta a secreção de bilirrubina.",
          "resultado": "Aumento no valor de bilirrubinas totais."
        },
        {
          "nome": "Ceftriaxona",
          "classe": "Antibiótico",
          "indicacoes": "Tratamento de infecções bacterianas.",
          "mecanismo": "Forma complexos com a bilirrubina, o que impede a ligação desta com a albumina.",
          "resultado": "Alto valor de bilirrubinas totais."
        },
        {
          "nome": "Sulfonamidas",
          "classe": "Antibióticos",
          "indicacoes": "Tratamento de infecções bacterianas.",
          "mecanismo": "Compete com a bilirrubina pela ligação com a albumina.",
          "resultado": "Aumento do índice de bilirrubinas totais."
        }
      ]
    },
    {
      "nome": "Glicose Sérica",
      "descricao": "É um carboidrato essencial para o metabolismo energético celular.",
      "descricaoDetalhada": "A glicose é regulada por insulina, glucagon e outros hormônios. Alterações nos níveis podem indicar diabetes, hipoglicemia ou desordens endócrinas.",
      "farmacos": [
        {
          "nome": "Metformina",
          "classe": "Biguanida",
          "indicacoes": "Usada no tratamento do diabetes tipo 2.",
          "mecanismo": "Reduz a glicose ao inibir a gliconeogênese hepática e renal, aumentar a sensibilidade à insulina nos músculos esqueléticos e retardar a absorção intestinal de glicose, resultando em glicemia mais baixa em exames laboratoriais.",
          "resultado": "Diminuição da glicose sérica."
        },
        {
          "nome": "Hidroclorotiazida",
          "classe": "Diurético tiazídico",
          "indicacoes": "Usada para hipertensão e retenção de líquidos.",
          "mecanismo": "Inibe a reabsorção de sódio no túbulo distal, causando depleção de potássio que prejudica a liberação de insulina pelas células beta pancreáticas, contribuindo para resistência à insulina e hiperglicemia.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Furosemida",
          "classe": "Diurético de alça",
          "indicacoes": "Usada para edema e insuficiência cardíaca.",
          "mecanismo": "A rápida perda de volume extracelular ativa mecanismos contrarregulatórios, como o eixo adrenal e catecolaminas, que estimulam a gliconeogênese hepática, elevando a glicose plasmática.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Carvedilol, Atenolol, Propranolol",
          "classe": "Betabloqueadores",
          "indicacoes": "Utilizados em hipertensão, arritmias e insuficiência cardíaca.",
          "mecanismo": "Bloqueiam receptores β2-pancreáticos, inibindo a liberação de insulina e a resposta adrenérgica à hipoglicemia, promovendo elevação da glicose ou mascarando hipoglicemia.",
          "resultado": "Aumento ou alteração da glicose sérica."
        },
        {
          "nome": "Fenitoína",
          "classe": "Antiepiléptico",
          "indicacoes": "Usada no tratamento de convulsões.",
          "mecanismo": "Inibe a liberação de insulina pelas células beta pancreáticas e aumenta a resistência à insulina, causando hiperglicemia.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Levodopa",
          "classe": "Precursor dopaminérgico",
          "indicacoes": "Usada no tratamento da doença de Parkinson.",
          "mecanismo": "Aumenta níveis de dopamina e catecolaminas, que estimulam a glicogenólise hepática e gliconeogênese, resultando em elevação da glicemia.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Paracetamol",
          "classe": "Analgésico/antipirético",
          "indicacoes": "Usado para controle de dor e febre.",
          "mecanismo": "Pode causar falsa diminuição da glicose ao interferir quimicamente em métodos laboratoriais baseados na reação da glicose com peroxidase (método da glicose oxidase).",
          "resultado": "Falsa diminuição da glicose."
        },
        {
          "nome": "Fluoxetina / Sertralina",
          "classe": "Inibidores seletivos da recaptação de serotonina (ISRS)",
          "indicacoes": "Usados no tratamento de depressão e ansiedade.",
          "mecanismo": "Podem alterar a sensibilidade à insulina e aumentar a secreção de cortisol, afetando a homeostase glicêmica e gerando flutuações nos níveis de glicose.",
          "resultado": "Alterações nos níveis de glicose."
        },
        {
          "nome": "Nitrofurantoína",
          "classe": "Antibacteriano",
          "indicacoes": "Usada para tratamento de infecção urinária.",
          "mecanismo": "Interfere nos testes laboratoriais da glicose urinária ao reagir com reagentes redutores, gerando falso-positivo para glicosúria.",
          "resultado": "Falso aumento da glicose urinária."
        }
      ]
    }
  ];

  return { marcadores };
};

export default function Marcadores_widget() {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedMarcador, setSelectedMarcador] = useState<Marcador | null>(null);
  const { marcadores } = useMarcadoresData();
  const [searchType, setSearchType] = useState('titulo'); // 'titulo' ou 'farmacos'

  const openModal = (marcador: Marcador) => {
    setSelectedMarcador(marcador);
    setModalOpened(true);
  };

  const [searchTerm, setSearchTerm] = useState('');

  function normalizarTexto(texto: string): string {
    return texto
        .normalize('NFD') // separa acentos das letras
        .replace(/[\u0300-\u036f]/g, '') // remove os acentos
        .toLowerCase()
        .trim();
  }


  // Filtra os marcadores com base no tipo de busca selecionado
  const marcadoresFiltrados = marcadores.filter((marcador) => {
    const termo = normalizarTexto(searchTerm);

    if (searchTerm === '') return true;

    if (searchType === 'titulo') {
      // Busca por título ou descrição
      const nome = normalizarTexto(marcador.nome);
      const descricao = normalizarTexto(marcador.descricao);
      return nome.includes(termo) || descricao.includes(termo);
    } else {
      // Busca por fármacos
      return marcador.farmacos.some(farmaco => {
        const nomeFarmaco = normalizarTexto(farmaco.nome);
        const classeFarmaco = normalizarTexto(farmaco.classe);
        return nomeFarmaco.includes(termo) || classeFarmaco.includes(termo);
      });
    }
  });



  return (
    <>
      <section id="marcadores" style={{ 
        padding: '40px',
        background: '#f8f9fa'
      }}>
        <Container size="lg" px={{ base: 'xs', md: 0 }} style={{fontFamily: 'Poppins'}}>
          <Title order={2} ta="center" mb={{ base: 'lg', md: 'xl' }} fz={{ base: 24, md: 32 }}>
            Marcadores
          </Title>

          <Stack gap="xs">
            <Input
                placeholder="Pesquisar por marcadores"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
                style={{
                  borderRadius: '20px',
                  border: 'none',
                  borderColor: '#000',
                }}
            />
            <Group align="center">
              <Text>Tipo de busca: </Text>
              <SegmentedControl
                value={searchType}
                onChange={setSearchType}
                data={[
                  { label: 'Título/Descrição', value: 'titulo' },
                  { label: 'Fármacos', value: 'farmacos' },
                ]}
              />
            </Group>
          </Stack>

          <SimpleGrid
              cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={{ base: 'md', md: 'lg' }}
              mt="xl"
              style={{
                fontFamily: 'raleway'
              }}
          >
            {marcadoresFiltrados.map((marcador, index) => (
                <Card
                    key={index}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Card.Section>
                    <Image
                        src={wellcome}
                        height='auto'
                        fit="cover"
                        alt={marcador.nome}
                    />
                  </Card.Section>

                  <Title order={3} mt="md" mb="xs" fz="lg" fw={500}>
                    {marcador.nome}
                  </Title>

                  <Text
                      size="sm"
                      color="dimmed"
                      lineClamp={3}
                      mb="md"
                      style={{ flexGrow: 1 }}
                  >
                    {marcador.descricao}
                  </Text>

                  <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                      onClick={() => openModal(marcador)}
                  >
                    Ver mais detalhes
                  </Button>
                </Card>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* Modal for detailed marcador information */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title={"Detalhes do Marcador"}
        size="lg"
        centered
        style={{
          fontFamily: 'raleway'
        }}
      >
        {selectedMarcador && (
          <Stack>

            <Title order={3} mt="md">
              {selectedMarcador.nome}
            </Title>

            <Text size="md" mb="md">
              <strong>Descrição:</strong> {selectedMarcador.descricaoDetalhada}
            </Text>

            <Title order={4} mt="lg" mb="md">
              Fármacos Interferentes
            </Title>

            <Accordion>
              {selectedMarcador.farmacos.map((farmaco, index) => (
                <Accordion.Item key={index} value={farmaco.nome}>
                  <Accordion.Control>
                    <strong>{farmaco.nome}</strong> - {farmaco.classe}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="xs">
                      <Text size="sm">
                        <strong>Indicações:</strong> {farmaco.indicacoes}
                      </Text>
                      <Text size="sm">
                        <strong>Mecanismo de interação:</strong> {farmaco.mecanismo}
                      </Text>
                      <Text size="sm">
                        <strong>Resultado da interação:</strong> {farmaco.resultado}
                      </Text>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Stack>
        )}
      </Modal>
    </>
  );
}
