function doGet(e) {
  if(!e.parameter.page){
 var htmlOutput =  HtmlService.createTemplateFromFile('index')
 return htmlOutput.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
 
 }
 return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate()
 }

function getUrl(){
  var url = ScriptApp.getService().getUrl()
  return url
}
function include(file){
  return HtmlService.createHtmlOutputFromFile(file).getContent()
  }

function includeRegis(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

var secret ="Cx6rEyqOEpE1XBVCSTC9WMzzCccoVCFjVLJvu8C0"
var firebaseUrl = "https://sheetcarcordfirebase-default-rtdb.firebaseio.com/";

function getToSheetRowData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Item');
  var rowData = ss.getSheetByName('RowData')
  var valueRange = sheet.getRange('A1:G341').getValues();
  for(i = 1; i < valueRange.length; i++)
  {
    rowData.appendRow(valueRange[i]);
  }
  debugger;
}
function getData() {
  var spreadSheetId = "13g1OtLlxFD3Lnpup5A-1u8yRqDEygzw_R4JW6u57FD0"; //แก้ 1
  var dataRange = "DATA!A2:D"; //แก้ 2
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}
function getDataFromRowData() {
  var spreadSheetId = "13g1OtLlxFD3Lnpup5A-1u8yRqDEygzw_R4JW6u57FD0"; //แก้ 1
  var dataRange = "RowData!A2:G"; //แก้ 2
  var range = Sheets.Spreadsheets.Values.get(spreadSheetId, dataRange);
  var values = range.values;
  return values;
}
