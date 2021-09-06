import React from "react";
import "./style.css";

export default function App() {
  const stringValue = "{i18n.t('MI_ROW_KEE360:Approved_Insights')}, {i18n.t('MI_ROW_KEE360:Approved_text')},{i18n.t('MI_ROW_KEE360:App_YeS')}";
  const rowData = [
    [
      "Active_vod__c",
      "Category_vod__c",
      "External_ID_vod__c",
      "Language_vod__c",
      "Name",
      "Text_vod__c"
    ],
    ["TRUE",
      "MI_ROW_KEE360",
      "MI_ROW_KEE360-<=>-en-US",
      'en-US',
      '<=>',
      '<=>'
    ]
  ];
  let str = rowData.map(e => e.join(",")).join("\n");
  const reg = new RegExp(/(?<=:).*?(?=\')/gm);

  const replacedString = stringValue.match(reg)[0];
  str = str.replace(/<=>/gi, replacedString);
  const uri = 'data:text/csv;charset=utf-8,' + str;
  console.log('test', replacedString, str);
  var downloadLink = document.createElement("a");
  downloadLink.href = uri;
  downloadLink.download = "veevoMessage.csv"; 

  // document.body.appendChild(downloadLink);
  // downloadLink.click(); 
  // document.body.removeChild(downloadLink);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
