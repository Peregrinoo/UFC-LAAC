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
      descricaoDetalhada: "A ureia constitui o principal metabólito nitrogenado derivado da degradação de proteínas pelo organismo. A ureia é um preditor fraco da filtração glomerular, pois 40%-70% retornam para o plasma por um processo de difusão passiva tubular, que é dependente do fluxo urinário. Sua principal utilidade clínica consiste na determinação da razão ureia:creatinina sérica. Em condições normais, essa relação é em torno de 30, mas este valor aumenta para > 40-50 quando, por exemplo, ocorre contração do volume extra­celular (desidratação, insuficiência cardíaca congestiva, estados febris prolongados e uso inadequado da terapia diurética por via intravenosa).",
      farmacos: [
        {
          nome: "Aciclovir",
          classe: "Antiviral",
          indicacoes: "Tratamento de infecções pelos vírus Herpes simplex, Herpes zoster e Varicella zoster, assim como supressão em pacientes imunocompetentes e profilaxia em indivíduos imunocomprometidos. Indicado também para profilaxia de infecções pelo vírus CMV em pacientes transplantados de medula óssea e tratamento de meningoencefalite herpética.",
          mecanismo: "Por ser excretado quase exclusivamente pelos rins, o aciclovir, em altas concentrações, pode formar cristais nos túbulos renais, levando a uma nefropatia por cristalização. Essa lesão tubular e/ou obstrução pode levar à diminuição da TFG, causando retenção de ureia e outros compostos nitrogenados - caracterizando um aumento da ureia sérica (uremia).",
          resultado: "Aumento"
        },
        {
          nome: "Ciclosporina",
          classe: "Imunossupressor",
          indicacoes: "Prevenção da rejeição de órgãos em transplante de rim, fígado, coração, pulmão ou pâncreas; prevenção da rejeição do enxerto após TMO e prevenção/tratamento da reação enxerto versus hospedeiro; doenças autoimunes.",
          mecanismo: "Vasoconstrição renal, especialmente na arteríola aferente do glomérulo, levando à redução da taxa de filtração glomerular (TFG) e diminuindo a excreção de ureia e outros produtos nitrogenados. O uso prolongado pode causar fibrose intersticial e atrofia tubular.",
          resultado: "Aumento"
        },
        {
          nome: "Calcitriol",
          classe: "Vitamina D",
          indicacoes: "Osteoporose; osteodistrofia renal em pacientes com insuficiência renal crônica; hipoparatireoidismo pós-operatório; hipoparatireoidismo idiopático; pseudo- hipoparatireoidismo; raquitismo dependente de vitamina D e raquitismo hipofosfatêmico resistente à vitamina D.",
          mecanismo: "O excesso de calcitriol pode causar hipercalcemia, que pode levar à nefrocalcinose. A lesão renal decorrente da hipercalcemia reduz a TFG causando retenção de ureia.",
          resultado: "Aumento"
        },
        {
          nome: "Captopril, Enalapril e Lisinopril",
          classe: "Inibidores da Enzima Conversora de Angiotensina",
          indicacoes: "Tratamento da hipertensão, insuficiência cardíaca congestiva, infarto do miocárdio e nefropatia diabética.",
          mecanismo: "Em condições normais a angiotensina II contrai a arteríola eferente, mantendo a pressão de filtração glomerular (PFG). Ao inibir a angiotensina II, o captopril vasodilata a arteríola eferente, o que diminui a PFG e, portanto, a TFG. Essa interação pode resultar em retenção de compostos nitrogenados, como a ureia.",
          resultado: "Aumento"
        },
        {
          nome: "Carbamazepina",
          classe: "Anticonvulsivante",
          indicacoes: "Epilepsia, distúrbio afetivo bipolar, abstinência alcoólica, neuralgia idiopática do trigêmeo, neuralgia glossofaríngea idiopática, neuropatia diabética dolorosa, diabetes insipidus central, poliúria e polidipsia.",
          mecanismo: "A carbamazepina raramente causa aumento da ureia sérica. Quando ocorre, pode estar associada à hiponatremia (via SIADH), nefrite intersticial ou rabdomiólise - todos efeitos adversos menos comuns.",
          resultado: "Aumento"
        },
        {
          nome: "Furosemida",
          classe: "Diurético de alça",
          indicacoes: "Tratamento de hipertensão arterial leve a moderada; edema devido a distúrbios cardíacos, hepáticos e renais; edema devido a queimaduras; insuficiência cardíaca aguda, especialmente no edema pulmonar; eliminação urinária reduzida devido à gestose; edemas cerebrais como medida de suporte; crises hipertensivas; indução de diurese forçada em envenenamentos.",
          mecanismo: "A furosemida pode aumentar a ureia sérica por causar hipovolemia e redução da filtração glomerular (azotemia pré-renal), além de estimular reabsorção tubular de ureia.",
          resultado: "Aumento"
        },
        {
          nome: "Gentamicina",
          classe: "Aminoglicosídeo",
          indicacoes: "Tratamento de infecções bacterianas sensíveis, normalmente organismos gram-negativos, incluindo Pseudomonas, Proteus, Serratia e gram-positivo Staphylococcus; tratamento de infecções dos ossos, pele e tecidos moles, infecções do trato respiratório, do trato urinário, intra-abdominal, de endocardite infecciosa e sepse.",
          mecanismo: "A gentamicina é filtrada pelos glomérulos e reabsorvida nos túbulos proximais, sendo acumulada dentro dos lisossomos, esse acúmulo pode causar necrose tubular aguda (NTA). A lesão tubular compromete a filtração glomerular, reduzindo a excreção de produtos nitrogenados, como a ureia e levando à sua elevação no sangue.",
          resultado: "Aumento"
        }
      ]
    },
    {
      nome: "Creatinina",
      descricao: "Indica a eficiência dos rins na filtração do sangue.",
      descricaoDetalhada: `A creatinina é um produto residual da creatina e da fosfocreatina oriunda do metabolismo muscular e da ingestão de carne. Aproximadamente 98% da creatina é mantida no músculo e 1,6% a 1,7% desta é convertida em creatinina por dia, que é livremente filtrada pelo glomérulo, sem sofrer reabsorção e metabolização pelo rim, sendo rapidamente excretada. Alterações no valor da creatinina sérica (valores acima de 1,3 mg/dL) só ocorrem a partir de diminuição da ordem de 50%-60% da TFG. O relativo descompasso da creatinina com o real estado funcional e sua baixa sensibilidade e especificidade se traduzem em diagnóstico e tratamento tardios.`,
      farmacos: [
        {
          nome: "Aciclovir",
          classe: "Antiviral",
          indicacoes: `Tratamento de infecções pelos vírus Herpes simplex, Herpes zoster e Varicella zoster, assim como supressão em pacientes imunocompetentes e profilaxia em indivíduos imunocomprometidos. Indicado também para profilaxia de infecções pelo vírus CMV em pacientes transplantados de medula óssea e tratamento de meningoencefalite herpética.`,
          mecanismo:
              "O aciclovir pode aumentar a creatinina sérica ao causar cristalização nos túbulos renais e lesão tubular, levando à redução da filtração glomerular.",
          resultado: "Aumento",
        },
        {
          nome: "Anfotericina B",
          classe: "Aminoglicosídeo",
          indicacoes: `Terapia empírica para infecção fúngica; tratamento de infecções causadas por fungos suscetíveis, tratamento de alguns casos de leishmaniose mucocutânea americana e terapia primária de leishmaniose visceral em adultos e crianças imunocompetentes.`,
          mecanismo:
              "Redução da perfusão renal (via vasoconstrição da arteríola aferente) e necrose tubular direta (apresenta ação tóxica para as células epiteliais do túbulo proximal), levando à diminuição da filtração glomerular.",
          resultado: "Aumento",
        },
        {
          nome: "Captopril, Enalapril e Lisinopril",
          classe: "Inibidores da Enzima Conversora de Angiotensina",
          indicacoes: `Tratamento da hipertensão, insuficiência cardíaca congestiva, infarto do miocárdio e nefropatia diabética.`,
          mecanismo:
              "Vasodilatação da arteríola eferente glomerular, reduzindo a pressão de filtração. O efeito é geralmente hemodinâmico e reversível, mas pode ser perigoso em certas condições clínicas.",
          resultado: "Aumento",
        },
        {
          nome: "Ciclosporina",
          classe: "Imunossupressor",
          indicacoes: `Prevenção da rejeição de órgãos em transplante de rim, fígado, coração, pulmão ou pâncreas; prevenção da rejeição do enxerto após TMO e prevenção/tratamento da reação enxerto versus hospedeiro; doenças autoimunes.`,
          mecanismo:
              "Vasoconstrição da arteríola aferente renal por meio do aumento da produção de endotelina e redução de óxido nítrico e prostaglandinas, e lesão tubular crônica, reduzindo a taxa de filtração glomerular.",
          resultado: "Aumento",
        },
        {
          nome: "Cefalexina",
          classe: "Cefalosporina de primeira geração",
          indicacoes: `Tratamento de infecções bacterianas suscetíveis, principalmente infecções de pele, urinárias e respiratórias.`,
          mecanismo:
              "Pode causar um leve aumento da creatinina sérica por competição tubular (sem lesão renal real) ou se acumular em pacientes com função renal reduzida.",
          resultado: "Aumento",
        },
        {
          nome: "Gentamicina",
          classe: "Aminoglicosídeo",
          indicacoes: `Tratamento de infecções bacterianas sensíveis, normalmente organismos gram-negativos, incluindo Pseudomonas, Proteus, Serratia e gram-positivo Staphylococcus; tratamento de infecções dos ossos, pele e tecidos moles, infecções do trato respiratório, do trato urinário, intra-abdominal, de endocardite infecciosa e sepse.`,
          mecanismo:
              "Necrose tubular aguda, por acúmulo e toxicidade direta no túbulo proximal, reduzindo a TFG.",
          resultado: "Aumento",
        },
      ],
    },
    {
      nome: "Fosfatase Alcalina",
      descricao: "Enzima associada a ossos, fígado e vias biliares.",
      descricaoDetalhada: `A fosfatase alcalina (ALP) compreende um grupo de enzimas fosfoidrolases que apresentam atividade máxima em pH alcalino, próximo de 10,0. Está localizada predominantemente em superfícies de troca como o epitélio intestinal, túbulos renais, barreira hematoencefálica e placenta. Cada tecido apresenta uma isoenzima, de modo que a ALP dosada no plasma é resultado da soma das diferentes isoenzimas presentes no organismo, com predomínio das frações ósseas e hepáticas. As condições fisiopatológicas em que os níveis plasmáticos de ALP estão aumentados são, por exemplo, as hepatopatias, principalmente aquelas envolvidas na obstrução do trato biliar, carcinomas hepáticos, primário e secundário, também refletem aumento de ALP plasmática. As morbidades envolvendo o tecido ósseo, como a Doença de Paget, também podem ser rastreadas por meio do exame de fosfatase alcalina plasmática.`,
      farmacos: [
        {
          nome: "Amoxicilina",
          classe: "Penicilina de amplo espectro",
          indicacoes: `Tratamento da otite média, sinusite, infecções de trato respiratório superior e inferior, pele e trato urinário; profilaxia de endocardite em pacientes cirúrgicos ou odontológicos, tratamento de H. pylori e periodontite.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Clorpromazina",
          classe: "Neuroléptico",
          indicacoes: `Psicoses, ansiedade, agitação, soluços incoercíveis, náuseas, vômitos, neurotoxicoses infantis, adjuvante no tétano, analgesia obstétrica e eclâmpsia, pré-anestesia.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Aciclovir",
          classe: "Antiviral",
          indicacoes: `Tratamento de infecções pelos vírus Herpes simplex, Herpes zoster, Varicella zoster; supressão em imunocompetentes, profilaxia em imunocomprometidos; tratamento de meningoencefalite herpética.`,
          mecanismo: "Aumento da função hepática.",
          resultado: "Aumento"
        },
        {
          nome: "Mirtazapina",
          classe: "Antidepressivo",
          indicacoes: `Tratamento da depressão.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Fluoxetina",
          classe: "Inibidor Seletivo da Recaptação de Serotonina (ISRS)",
          indicacoes: `Depressão, bulimia nervosa, transtorno obsessivo-compulsivo (TOC), transtorno disfórico pré-menstrual, síndrome do pânico.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Amitriptilina",
          classe: "Antidepressivo tricíclico",
          indicacoes: `Depressão e enurese noturna para crianças acima de 12 anos.`,
          mecanismo: "Lesão hepática mista e hipersensibilidade hepática idiossincrática.",
          resultado: "Aumento"
        },
        {
          nome: "Azatioprina",
          classe: "Imunossupressor",
          indicacoes: `Prevenção de rejeição em transplantes de órgãos, artrite reumatoide grave refratária, doenças autoimunes.`,
          mecanismo: "Lesão hepática mista.",
          resultado: "Aumento"
        },
        {
          nome: "Clindamicina",
          classe: "Antimicrobiano",
          indicacoes: `Tratamento de infecções respiratórias, pele, tecidos moles, dentárias, ginecológicas, ósseas e articulares, e anaeróbias susceptíveis.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Captopril e Enalapril",
          classe: "Inibidores da Enzima Conversora de Angiotensina (IECA)",
          indicacoes: `Hipertensão, insuficiência cardíaca congestiva, infarto do miocárdio, nefropatia diabética.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Nitrofurantoína",
          classe: "Antimicrobiano",
          indicacoes: `Prevenção e tratamento de infecções urinárias causadas por cepas sensíveis de E. coli, S. aureus, Enterococcus, Klebsiella e Enterobacter.`,
          mecanismo: "Lesão hepática colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Carbamazepina",
          classe: "Anticonvulsivante",
          indicacoes: `Epilepsia, distúrbio bipolar, abstinência alcoólica, neuralgia do trigêmeo, diabetes insípido e poliúria.`,
          mecanismo: "Hepatotoxicidade e lesão hepática mista.",
          resultado: "Aumento"
        },
        {
          nome: "Eritromicina",
          classe: "Macrolídeo",
          indicacoes: `Infecções respiratórias, de pele, clamídia, sífilis, gonorreia, infecções não gonocócicas e outros.`,
          mecanismo: "Lesão colestática.",
          resultado: "Aumento"
        },
        {
          nome: "Fenitoína",
          classe: "Anticonvulsivante",
          indicacoes: `Crises convulsivas generalizadas e parciais.`,
          mecanismo: "Hepatotoxicidade e lesão hepática mista.",
          resultado: "Aumento"
        },
        {
          nome: "Fenobarbital",
          classe: "Anticonvulsivante",
          indicacoes: `Crises convulsivas, estado epilético, pré-anestesia e sedação.`,
          mecanismo: "Hepatotoxicidade e lesão hepática mista.",
          resultado: "Aumento"
        },
        {
          nome: "Isoniazida",
          classe: "Tuberculostático",
          indicacoes: `Tratamento e profilaxia da tuberculose.`,
          mecanismo: "Hepatotoxicidade.",
          resultado: "Aumento"
        },
        {
          nome: "Metotrexato",
          classe: "Antimetabólito",
          indicacoes: `Cânceres, artrite reumatoide, psoríase.`,
          mecanismo: "Hepatotoxicidade.",
          resultado: "Aumento"
        },
        {
          nome: "Metoprolol",
          classe: "Beta-Bloqueador",
          indicacoes: `Hipertensão, arritmias, angina, insuficiência cardíaca, enxaqueca.`,
          mecanismo: "Aumento da atividade hepática.",
          resultado: "Aumento"
        },
        {
          nome: "Trazodona",
          classe: "Antidepressivo",
          indicacoes: `Depressão com ansiedade, dor neurogênica, dor crônica.`,
          mecanismo: "Lesão hepática mista.",
          resultado: "Aumento"
        },
        {
          nome: "Sulfametoxazol + Trimetoprima",
          classe: "Trimetoprima em associação com sulfas",
          indicacoes: `Infecções respiratórias, urinárias, gastrointestinais e profilaxia em pacientes imunocomprometidos.`,
          mecanismo: "Lesão hepática mista.",
          resultado: "Aumento"
        },
      ],
    },
    {
      nome: "Aspartato Aminotransferase (AST)",
      descricao: "Marcador para diagnóstico de danos celulares no fígado, coração e músculos.",
      descricaoDetalhada: `A AST é uma enzima que está presente tanto no citosol quanto nas mitocôndrias das células, especialmente no fígado, coração e músculos. A versão mitocondrial da AST, que é mais importante para o diagnóstico de lesões hepáticas, é liberada na corrente sanguínea quando há dano à célula. Então, quando há aumento da AST, ela pode ser um indicativo de dano celular, não só no fígado, mas também em outros órgãos, dependendo da forma da enzima liberada.`,
      farmacos: [
        {
          nome: "Paracetamol",
          classe: "Analgésico e antitérmico",
          indicacoes: `Alívio de dor leve a moderada (como dor de cabeça, dor muscular, dores articulares) e redução da febre.`,
          mecanismo: "Hepatotoxicidade.",
          resultado: "Aumento dos níveis de AST."
        },
        {
          nome: "Enalapril",
          classe: "Inibidor da enzima conversora de angiotensina (IECA)",
          indicacoes: `Tratamento de hipertensão, insuficiência cardíaca congestiva e proteção renal em pacientes com diabetes.`,
          mecanismo: "Hepatotoxicidade.",
          resultado: "Aumento dos níveis de AST."
        },
        {
          nome: "Diltiazem",
          classe: "Bloqueador dos canais de cálcio",
          indicacoes: `Tratamento de hipertensão, angina e algumas arritmias cardíacas, como fibrilação atrial.`,
          mecanismo: "Hepatotoxicidade.",
          resultado: "Aumento dos níveis de AST."
        },
        {
          nome: "Aciclovir",
          classe: "Antiviral (análogo de nucleosídeo)",
          indicacoes: `Tratamento de infecções causadas pelo vírus herpes simples, como herpes labial, herpes genital e varicela-zóster.`,
          mecanismo: "Aumento da função hepática.",
          resultado: "Aumento dos níveis de AST."
        },
        {
          nome: "Fenobarbital",
          classe: "Barbitúrico (sedativo e anticonvulsivante)",
          indicacoes: `Tratamento de convulsões (epilepsia), distúrbios de sono (insônia), e como sedativo em algumas condições.`,
          mecanismo: "Aumento da função hepática por lesão hepática mista.",
          resultado: "Aumento dos níveis de AST."
        },
      ],
    },
    {
      nome: "Gama-GT",
      descricao: "Indica lesão hepática, especialmente por álcool ou medicamentos.",
      descricaoDetalhada: "A gama-glutamil transferase é uma enzima presente principalmente no fígado e vias biliares. É um marcador sensível de dano hepático, especialmente relacionado ao consumo de álcool.",
      farmacos: [
        {
          nome: "Fenitoína",
          classe: "Anticonvulsivante",
          indicacoes: "Tratamento de epilepsia.",
          mecanismo: "Induz enzimas hepáticas, aumentando os níveis de Gama-GT sem necessariamente indicar dano hepático.",
          resultado: "Aumento"
        }
      ]
    },
    {
      nome: "ALT",
      descricao: "Enzima encontrada no fígado; detecta danos hepáticos (TGP).",
      descricaoDetalhada: "A alanina aminotransferase é uma enzima encontrada principalmente no fígado. Elevações são altamente específicas para dano hepático.",
      farmacos: [
        {
          nome: "Isoniazida",
          classe: "Antibiótico",
          indicacoes: "Tratamento da tuberculose.",
          mecanismo: "Pode causar hepatotoxicidade, elevando os níveis de ALT.",
          resultado: "Aumento"
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
      "descricao": "Subproduto do metabolismo de purinas, excretado pelos rins.",
      "descricaoDetalhada": "O ácido úrico é excretado pelos rins e níveis elevados podem indicar gota, disfunções renais ou uso de certos fármacos, enquanto níveis baixos são menos comuns, mas clinicamente relevantes.",
      "farmacos": [
        {
          "nome": "Enalapril/Captopril",
          "classe": "Inibidores da ECA",
          "indicacoes": "Tratamento de hipertensão e insuficiência cardíaca.",
          "mecanismo": "Reduzem a filtração glomerular e secreção de ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Hidroclorotiazida",
          "classe": "Diurético tiazídico",
          "indicacoes": "Tratamento de hipertensão arterial.",
          "mecanismo": "Compete com o ácido úrico nos transportadores tubulares, promovendo retenção.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Furosemida",
          "classe": "Diurético de alça",
          "indicacoes": "Tratamento de hipertensão arterial.",
          "mecanismo": "Causa competição tubular e ativa reabsorção de sódio e ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Espironolactona",
          "classe": "Diurético poupador de potássio",
          "indicacoes": "Usado em ICC e hiperaldosteronismo.",
          "mecanismo": "Reduz a excreção de ácido úrico ao diminuir fluxo distal.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Metildopa",
          "classe": "Anti-hipertensivo de ação central",
          "indicacoes": "Hipertensão gestacional.",
          "mecanismo": "Inibe a secreção renal de ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Betabloqueadores",
          "classe": "Anti-hipertensivos",
          "indicacoes": "Tratamento de hipertensão e insuficiência cardíaca.",
          "mecanismo": "Reduzem a filtração glomerular e excreção renal de ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Levodopa",
          "classe": "Antiparkinsoniano",
          "indicacoes": "Tratamento da doença de Parkinson.",
          "mecanismo": "Estimula a excreção renal de ácido úrico.",
          "resultado": "Diminuição do ácido úrico sérico."
        },
        {
          "nome": "Fluoxetina/Sertralina",
          "classe": "ISRS",
          "indicacoes": "Depressão e ansiedade.",
          "mecanismo": "Reduzem a reabsorção de ácido úrico.",
          "resultado": "Diminuição do ácido úrico sérico."
        },
        {
          "nome": "Paracetamol",
          "classe": "Analgésico/Antipirético",
          "indicacoes": "Controle de dor e febre.",
          "mecanismo": "Reduz a depuração renal de ácido úrico.",
          "resultado": "Aumento do ácido úrico sérico."
        },
        {
          "nome": "Alopurinol",
          "classe": "Inibidor da xantina oxidase",
          "indicacoes": "Tratamento de gota e hiperuricemia.",
          "mecanismo": "Inibe a produção de ácido úrico.",
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
          "indicacoes": "Contracepção e reposição hormonal.",
          "mecanismo": "Induz a atividade da colestase intra-hepática.",
          "resultado": "Aumento no valor de bilirrubinas totais."
        },
        {
          "nome": "Metotrexato",
          "classe": "Imunossupressor",
          "indicacoes": "Tratamento de artrite reumatoide, psoríase e câncer.",
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
          "mecanismo": "Indução das enzimas hepáticas, que altera o processo de conjugação da bilirrubina.",
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
          "mecanismo": "Causa lesão nos canalículos biliares, dificultando a secreção da bilirrubina.",
          "resultado": "Aumento no valor de bilirrubinas totais."
        },
        {
          "nome": "Ceftriaxona",
          "classe": "Antibiótico",
          "indicacoes": "Tratamento de infecções bacterianas.",
          "mecanismo": "Forma complexos com a bilirrubina, impedindo sua ligação com a albumina.",
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
          "indicacoes": "Tratamento de diabetes tipo 2.",
          "mecanismo": "Reduz a glicose ao inibir a gliconeogênese hepática e aumentar a sensibilidade à insulina.",
          "resultado": "Diminuição da glicose sérica."
        },
        {
          "nome": "Hidroclorotiazida",
          "classe": "Diurético tiazídico",
          "indicacoes": "Hipertensão e retenção de líquidos.",
          "mecanismo": "Depleção de potássio que prejudica a liberação de insulina, gerando resistência à insulina.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Furosemida",
          "classe": "Diurético de alça",
          "indicacoes": "Edema e insuficiência cardíaca.",
          "mecanismo": "Ativa mecanismos contrarregulatórios, estimulando a gliconeogênese hepática.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Carvedilol, Atenolol, Propranolol",
          "classe": "Betabloqueadores",
          "indicacoes": "Hipertensão, arritmias e insuficiência cardíaca.",
          "mecanismo": "Bloqueiam receptores β2-pancreáticos, inibindo a liberação de insulina.",
          "resultado": "Aumento ou alteração da glicose sérica."
        },
        {
          "nome": "Fenitoína",
          "classe": "Antiepiléptico",
          "indicacoes": "Tratamento de convulsões.",
          "mecanismo": "Inibe a liberação de insulina e aumenta a resistência à insulina.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Levodopa",
          "classe": "Precursor dopaminérgico",
          "indicacoes": "Tratamento da doença de Parkinson.",
          "mecanismo": "Estimula glicogenólise hepática e gliconeogênese.",
          "resultado": "Aumento da glicose sérica."
        },
        {
          "nome": "Paracetamol",
          "classe": "Analgésico/antipirético",
          "indicacoes": "Controle de dor e febre.",
          "mecanismo": "Pode causar falsa diminuição da glicose em exames laboratoriais.",
          "resultado": "Falsa diminuição da glicose."
        },
        {
          "nome": "Fluoxetina / Sertralina",
          "classe": "ISRS",
          "indicacoes": "Tratamento de depressão e ansiedade.",
          "mecanismo": "Alteram a sensibilidade à insulina e aumentam a secreção de cortisol.",
          "resultado": "Alterações nos níveis de glicose."
        },
        {
          "nome": "Nitrofurantoína",
          "classe": "Antibacteriano",
          "indicacoes": "Tratamento de infecção urinária.",
          "mecanismo": "Interfere nos testes laboratoriais causando falso-positivo para glicosúria.",
          "resultado": "Falso aumento de glicose urinária."
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
                        height={160}
                        fit="fill"
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
