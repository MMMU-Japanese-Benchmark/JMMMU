import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import japaneseArt from "/@/assets/japanese_art.jpg";
import japaneseHeritage from "/@/assets/japanese_heritage.jpg";
import japaneseHistory from "/@/assets/japanese_history.jpg";
import worldHistory from "/@/assets/world_history.jpg";
import artPsychology from "/@/assets/art_psychology.png";
import business from "/@/assets/business.jpg";
import science from "/@/assets/science.jpg";
import healthMedicine from "/@/assets/health_medicine.jpg";
import techEngineering from "/@/assets/tech_engineering.jpg";
import { Question } from "/@/molecules";
import "./index.css";

const Example = () => {
  const [tabValue, setTabValue] = useState("japanese_art");
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <div className="example">
      <h1 className="example-title">Example</h1>
      <div className="example-tabs" lang="ja">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
            {/* Culture Specific */}
            <Tab label="Jpn. Art" value="japanese_art" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="Jpn. Heritage" value="japanese_heritage" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="Jpn. History" value="japanese_history" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="World History" value="world_history" style={{ textTransform: "none", fontSize: "1rem" }} />
            {/* Culture Agnostic */}
            <Tab label="Art & Psych." value="art_psychology" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="Business" value="business" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="Science" value="science" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="Medicine" value="health_medicine" style={{ textTransform: "none", fontSize: "1rem" }} />
            <Tab label="Tech & Eng." value="tech_engineering" style={{ textTransform: "none", fontSize: "1rem" }} />
          </Tabs>
        </Box>
        {/* Culture Specific */}
        <Question
          value={tabValue}
          index="japanese_art"
          questionId="test_Japanese_Art_77"
          questionText="<image 1>は何という作品でしょう？"
          image={japaneseArt} // eslint-disable-line
          option1="北斎漫画"
          option2="富嶽三十六景"
          option3="西瓜図"
          option4="東海道五十三次"
          answer="B"
          explanation=""
        />
        <Question
          value={tabValue}
          index="japanese_heritage"
          questionId="test_Japanese_Heritage_147"
          questionText="天守が国宝に指定されている国宝五城のうち、<image 1>は西から数えて何番目ですか？"
          image={japaneseHeritage} // eslint-disable-line
          option1="1"
          option2="3"
          option3="2"
          option4="4"
          answer="C"
          explanation="松江城（島根県）、姫路城（兵庫県）、彦根城（滋賀県）、犬山城（愛知県）、松本城（長野県）のうち、姫路城は西から2番目です"
        />
        <Question
          value={tabValue}
          index="japanese_history"
          questionId="test_Japanese_History_34"
          questionText="<image 1>はある戦いを描いたものです。その戦いとして最もふさわしいのはどれでしょう？"
          image={japaneseHistory} // eslint-disable-line
          option1="中先代の乱"
          option2="承久の乱"
          option3="保元・平治の乱"
          option4="治承・寿永の乱"
          answer="D"
          explanation="絵のタイトルとして源平壇之浦大合戰之圖が書かれており、海上での戦いの様子が描かれていることから、壇ノ浦の戦いを描いたものと分かります。答えは治承・寿永の乱となります。"
        />
        <Question
          value={tabValue}
          index="world_history"
          questionId="test_World_History_25"
          questionText="<image 1>が見られる民族は何でしょう？"
          image={worldHistory} // eslint-disable-line
          option1="スキタイ"
          option2="匈奴"
          option3="フン族"
          option4="ゴート族"
          answer="A"
          explanation="スキタイ芸術"
        />
        {/* Culture Agnostic */}
        <Question
          value={tabValue}
          index="art_psychology"
          questionId="validation_Music_14"
          questionText="<image 1> 音程の名称を一つ選択してください。"
          image={artPsychology} // eslint-disable-line
          option1="ボックス 1"
          option2="ボックス 2"
          option3="ボックス 3"
          option4="ボックス 4"
          answer="B"
          explanation=""
        />
        <Question
          value={tabValue}
          index="business"
          questionId="validation_Finance_1"
          questionText="Eagle Sport Supplyの財務諸表は次の表に示されています：<image 1>。簡単のために、「費用」には利息が含まれています。Eagleの資産が売上に比例すると仮定します。Eagleが配当支払率50%を維持し、2020年に15%の成長率を計画している場合、必要な外部資金を求めなさい。"
          image={business} // eslint-disable-line
          option1="¥15250"
          option2="¥16250"
          option3="¥17250"
          option4="¥18250"
          answer="B"
          explanation=""
        />
        <Question
          value={tabValue}
          index="science"
          questionId="validation_Chemistry_15"
          questionText="<image 1> 上の図は、シュウ酸ナトリウム ($Na_2C_2O_4$) と塩酸 ($HCl$) のような強酸との反応における理想的な滴定曲線を表しています。E と F は終点での pH を表しています。G と H はサンプルの組成に依存し、存在しない可能性もあります。水以外に、E における溶液中での主要な化学種は何ですか？"
          image={science} // eslint-disable-line
          option1="$Na_2C_2O_4$ と $HCl$"
          option2="$Na^+$, $Cl^-$, および $HC_2O_4^-$"
          option3="C_2O_4^{2-} と $H^+$"
          option4="$Na^+$, $H^+$, および $C_2O_4^{2-}$"
          answer="B"
          explanation=""
        />
        <Question
          value={tabValue}
          index="health_medicine"
          questionId="validation_Basic_Medical_Science_9"
          questionText="<image 1>Eは何ですか？"
          image={healthMedicine} // eslint-disable-line
          option1="閾値"
          option2="脱分極"
          option3="活動電位"
          option4="再分極"
          answer="D"
          explanation=""
        />
        <Question
          value={tabValue}
          index="tech_engineering"
          questionId="validation_Computer_Science_22"
          questionText="<image 1> 上記のNFA（非決定性有限オートマトン）は何を認識しますか。正規表現で答えを書いてください。"
          image={techEngineering} // eslint-disable-line
          option1="aa*|bb*"
          option2="a*|bb*"
          option3="aa*|b*"
          option4="a*|b*"
          answer="A"
          explanation=""
        />
      </div>
    </div>
  );
};

export default Example;
