AUI.add("aui-form-builder-field",function(bL){var bF=bL.Lang,aG=bF.isArray,ah=bF.isString,c="acceptChildren",az="boundingBox",bT="builder",b1="button",C="buttons",b6="buttonsNode",bf="checkbox",D="checked",cb="children",bX="clearfix",aA="close",aC="component",b5="contentBox",ba="container",n="dataType",y="default",aI="delete",bp="disabled",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",W="dropNode",aB="dropZone",aZ="dropZoneNode",bh="duplicate",G="edit",bo="",a5="field",f="fields",bv="for",r="form",aQ="formBuilder",be="form-builder-field",o="helper",am="hidden",q="icon",bW="id",aa="label",Y="labelNode",aX="metadata",at="name",cd="node",a="panel",aR="portalLayout",a9="predefinedValue",a6="proxy",aj="required",bq="state",a1="settings",ak="settingsFormNode",bP="showLabel",ao="size",P=" ",ai="string",ae="strings",bN="templateNode",bs="text",O="type",bg="unique",bC="zone",aJ="widget",w=bL.getClassName,a3=w(aC),bc=w(a5,aa),b9=w(o,bX),V=w(o,am),by=w(bq,y),b=w(a5),bb=w(a5,bs),x=w(r,bT,b1),an=w(r,bT,b1,aI),aW=w(r,bT,b1,bh),H=w(r,bT,b1,G),cc=w(r,bT,q),i=w(r,bT,q,aI),t=w(r,bT,q,bh),bH=w(r,bT,q,G),bu=w(r,bT,a5),bi=w(r,bT,a5,C),a0=w(r,bT,ar,cd),bD=w(r,bT,ar,bC),br=w(r,bT,bg),bV=w(aJ),bJ='<li class="'+[bV,a3,bu].join(P)+'"></li>',l='<div class="'+[bi,V].join(P)+'">'+'<a class="'+[x,H].join(P)+'" href="javascript:;" title="Edit">'+'<div class="'+[cc,bH].join(P)+'"></div>'+"</a>"+'<a class="'+[x,aW].join(P)+'" href="javascript:;" title="Duplicate">'+'<div class="'+[cc,t].join(P)+'"></div>'+"</a>"+'<a class="'+[x,an].join(P)+'" href="javascript:;" title="Delete">'+'<div class="'+[cc,i].join(P)+'"></div>'+"</a>"+"</div>",bY='<div class="'+b9+'"></div>',U='<ul class="'+bD+'"></ul>',ab='<span class="'+[b,bb].join(P)+'"></span>',aO='<label class="'+bc+'"></label>',ca="<p></p>";var b8=bL.Component.create({NAME:be,ATTRS:{acceptChildren:{value:true},dataType:{value:ai},disbaled:{value:false},key:{value:bo},formBuilder:{value:undefined},id:{value:bo},icon:{value:bo},label:{value:bo},name:{valueFn:function(){var A=this;return A.get(O)+(++bL.Env._uidx);}},parent:{value:null},predefinedValue:{value:bo},required:{setter:bL.DataType.Boolean.parse,value:false},selected:{setter:bL.DataType.Boolean.parse,value:false},showLabel:{setter:bL.DataType.Boolean.parse,value:true},template:{value:bo},type:{value:bo},unique:{setter:bL.DataType.Boolean.parse,value:false},buttonsNode:{valueFn:function(){return bL.Node.create(l);}},dropZoneNode:{valueFn:function(){return bL.Node.create(U);}},labelNode:{valueFn:function(){return bL.Node.create(aO);}},templateNode:{valueFn:"getNode"}},AUGMENTS:[bL.FormBuilderFieldSupport],UI_ATTRS:[c,bp,aa,at,a9,bP,bg],HTML_PARSER:{buttonsNode:bz+bi,dropZoneNode:bz+bD,labelNode:aa+bz+bc},prototype:{BOUNDING_TEMPLATE:bJ,initializer:function(){var A=this;A.get(az).setData(a5,A);},bindUI:function(){var A=this;},renderUI:function(){var A=this;var ch=A.get(az);var ci=A.get(b6);var L=A.get(b5);var cg=A.get(Y);var cf=A.get(bN);if(!ch.contains(ci)){ch.prepend(ci);}if(!L.contains(cg)){L.append(cg);cg.setAttribute(bv,cf.get(bW));}if(!L.contains(cf)){L.append(cf);}},saveSettings:function(){var A=this;var L=A.get(aQ);var cf=L.get(ak);bL.Array.each(bL.io._serialize(cf._node).split("&"),function(cg){var ch=cg.split("=");A.set(ch[0],decodeURIComponent(ch[1]));});},renderSettings:function(){var cm=this;var cf=cm.get(aQ);var A=cf.get(ak);var cn=cf.get(ae);if(!cm.fieldSettingsNode){cm.fieldSettingsNode=bL.Node.create(bY);var ci=bL.Node.create(bY);var ck=bL.Node.create(ab);var cl=bL.Node.create(aO);cl.setContent(cn[O]);var cg=bL.Node.create(ca);var cj=cm.get(n)||cm.get(O);cg.setContent(cj);ck.append(cl);ck.append(cg);ck.appendTo(ci);cm.labelField=new bL.Field({type:"text",name:aa,labelText:"Label",value:cm.get(aa)}).render(ci);cm.labelField.get(cd).on({keyup:bL.bind(cm._onLabelKeyUp,cm)});cm.showLabelField=new bL.Field({type:"checkbox",name:bP,labelText:"Show label",labelAlign:"left",value:cm.get(bP)}).render(ci);var ch=cm.showLabelField.get(cd);ch.set(D,cm.get(bP));ch.on({change:bL.bind(cm._onSettingsFieldChange,cm)});cm._renderSettingsFields([{type:"text",name:at,labelText:"Name",value:cm.get(at)},{type:"text",name:a9,labelText:"Default value",value:cm.get(a9)}],ci);cm.requiredField=new bL.Field({type:"checkbox",name:aj,labelText:"Required",labelAlign:"left",value:aj}).render(ci);var L=cm.requiredField.get(cd);L.set(D,cm.get(aj));L.on({change:bL.bind(cm._onSettingsFieldChange,cm)});cm.propertiesPanel=new bL.Panel({bodyContent:ci,collapsible:true,title:"Properties"}).render();cm.fieldSettingsNode.append(cm.propertiesPanel.get(az));}A.setContent(cm.fieldSettingsNode);},getHTML:function(){},getNode:function(){},_onLabelKeyUp:function(L){var A=this;var cg=L.target;var cf=cg.val();A.set(aa,cf);},_onSettingsFieldChange:function(L){var A=this;var cg=L.target;var cf=cg.val();if(cg.get(O)==bf){cf=cg.get(D);}A.set(cg.get(at),cf);},_renderSettingsFields:function(cf,L){var A=this;bL.each(cf,function(ch){var ci=new bL.Field(ch).render(L);var cg=ci.get(cd);if(ch.type==bf){cg.set(D,ch.value);}A[ch.name+"Field"]=ci;});},_uiSetAcceptChildren:function(ch){var A=this;var cf=A.get(az);var cg=A.get(aZ);var L=cf.one(bz+bD);if(ch&&!L){cf.append(cg);}else{if(!ch&&L){L.remove();}else{if(ch&&L){A.set(aZ,L);}}}},_uiSetDisabled:function(cf){var A=this;var L=A.get(bN);if(cf){L.setAttribute(bp,cf);}else{L.removeAttribute(bp);}},_uiSetLabel:function(cf){var A=this;var L=A.get(Y);L.setContent(cf);},_uiSetName:function(cf){var A=this;var L=A.get(bN);L.set(at,cf);},_uiSetPredefinedValue:function(cf){var A=this;var L=A.get(bN);L.val(cf);},_uiSetShowLabel:function(cf){var A=this;var L=A.get(Y);L.toggleClass(V,!cf);},_uiSetUnique:function(cg){var A=this;var L=A.get(az);var cf=A.get(b6);L.toggleClass(br,cg);cf.one(bz+aW).toggleClass(V,cg);}}});bL.FormBuilderField=b8;bL.FormBuilder.types["field"]=bL.FormBuilderField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,av=function(A){return(A instanceof bL.Node);
},aP=function(A){return(A instanceof bL.NodeList);},aV=bL.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),az="boundingBox",b1="button",bZ="buttonType",b5="contentBox",ba="container",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",bo="",a5="field",f="fields",be="form-builder-field",ag="form-builder-button-field",bW="id",q="icon",aL="input",aa="label",at="name",cd="node",bQ="option",bO="options",aR="portalLayout",a9="predefinedValue",a6="proxy",bA="reset",aY="selected",bE="selectedIndex",bn="submit",P=" ",ae="strings",bd="template",bN="templateNode",bs="text",O="type",m="value",w=bL.getClassName,aw=w(a5,aL),bS=w(a5,aL,bs),bu=w(be),Q=w(be,cd),by=w(bq,y),bt='<input id="{id}" class="'+[Q,aw].join(P)+'" name="{name}" type="{type}" value="{value}" />',ce=[bn,bA,b1];var S=bL.Component.create({NAME:ag,ATTRS:{acceptChildren:{value:false,readOnly:true},buttonType:{value:bn,validator:function(A){return bL.Array(ce).indexOf(A.toLowerCase())>-1;}},predefinedValue:{value:aV(bn)},showLabel:{value:false},strings:{value:{button:"Button",reset:"Reset",submit:"Submit"}},template:{valueFn:function(){return bt;}}},UI_ATTRS:bL.FormBuilderField.UI_ATTRS.concat([bZ]),CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{getHTML:function(){var A=this;var cf=A.get(bd);var cj=A.get(bW);var ch=A.get(aa);var cg=A.get(at);var L=A.get(bZ);var ci=A.get(a9);return bL.substitute(cf,{id:cj,label:ch,name:cg,type:L,value:ci});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var cj=this;var L=cj.get(aQ);var A=L.get(ak);var ci=cj.get(bZ);var ck=cj.get(ae);bL.FormBuilderButtonField.superclass.renderSettings.apply(cj,arguments);if(!cj._renderedButtonSettings){cj._renderedButtonSettings=true;var ch=cj.propertiesPanel.get(d);var cm=[];bL.each(ce,function(cn){cm.push({labelText:ck[cn],value:cn});});var cl=new bL.Select({labelText:"Button type",name:bZ,options:cm}).render(ch.item(0));var cf=cl.get(cd);cf.on({change:bL.bind(cj._onButtonTypeChange,cj)});var cg=bL.Array(ce).indexOf(ci);cf.all(bQ).item(cg).set(aY,true);}},_onButtonTypeChange:function(L){var A=this;var cf=L.target;A.set(bZ,cf.get(m));},_uiSetButtonType:function(cf){var A=this;var L=A.get(bN);L.set(O,cf);}}});bL.FormBuilderButtonField=S;bL.FormBuilder.types["button"]=bL.FormBuilderButtonField;var bF=bL.Lang,aG=bF.isArray,a2=bF.isBoolean,bl=bF.isNumber,ah=bF.isString,aE="boolean",az="boundingBox",d="bodyContent",bf="checkbox",D="checked",aq="choice",b5="contentBox",ba="container",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",bo="",a5="field",f="fields",be="form-builder-field",b2="form-builder-checkbox-field",bW="id",q="icon",aM="inline",aa="label",g="labels",at="name",cd="node",aR="portalLayout",a9="predefinedValue",a6="proxy",ao="size",P=" ",bd="template",bN="templateNode",m="value",w=bL.getClassName,b=w(a5),bB=w(a5,bf),bI=w(a5,aq),bu=w(be),b3=w(be,bf),Q=w(be,cd),by=w(bq,y),ac=w(a5,g,aM),bJ='<li class="'+[bV,a3,bu,b3].join(P)+'"></li>',aD='<input id="{id}" class="'+[Q,b,bB,bI].join(P)+'" name="{name}" type="checkbox" value="{value}" {checked} />';var T=bL.Component.create({NAME:b2,ATTRS:{dataType:{value:aE},predefinedValue:{setter:bL.DataType.Boolean.parse,value:false},template:{valueFn:function(){return aD;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{BOUNDING_TEMPLATE:bJ,bindUI:function(){var A=this;bL.FormBuilderCheckBoxField.superclass.bindUI.apply(A,arguments);var L=A.get(bN);L.on({"change":bL.bind(A._onValueChange,A)});},renderUI:function(){var A=this;var L=A.get(b5);var cf=A.get(bN);var cg=A.get(Y);bL.FormBuilderCheckBoxField.superclass.renderUI.apply(A,arguments);cg.insert(cf,cg,"before");},getHTML:function(){var A=this;var L=A.get(bd);var ch=A.get(D);var cj=A.get(bW);var cg=A.get(aa);var cf=A.get(at);var ci=A.get(a9);return bL.substitute(L,{checked:ch?'checked="checked"':bo,id:cj,label:cg,name:cf,value:ci});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var L=this;var cg=L.get(aQ);var ch=cg.get(ak);bL.FormBuilderCheckBoxField.superclass.renderSettings.apply(L,arguments);if(!L._renderedCheckboxSettings){L._renderedCheckboxSettings=true;L.predefinedValueField.destroy();var A=L.propertiesPanel.get(d);var cf=new bL.Field({type:"checkbox",name:a9,labelText:"Checked",labelAlign:"left"}).render(A.item(0));L.checkedFieldNode=cf.get(cd);L.checkedFieldNode.on({change:bL.bind(L._onValueChange,L)});L.checkedFieldNode.set(D,L.get(a9));}},_onValueChange:function(L){var A=this;var cf=L.target;A.set(a9,cf.get(D));},_uiSetPredefinedValue:function(cg){var A=this;var cf=A.get(bN);var L=A.checkedFieldNode;if(L){L.set(D,cg);}cf.set(D,cg);}}});bL.FormBuilderCheckBoxField=T;bL.FormBuilder.types["checkbox"]=bL.FormBuilderCheckBoxField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,av=function(A){return(A instanceof bL.Node);},aP=function(A){return(A instanceof bL.NodeList);},az="boundingBox",b5="contentBox",ba="container",n="dataType",bz=".",ar="drop",bo="",a5="field",f="fields",be="form-builder-field",B="form-builder-fieldset-field",bW="id",q="icon",aa="label",at="name",cd="node",a9="predefinedValue",P=" ",ae="strings",bd="template",bN="templateNode",bs="text",O="type",m="value",bC="zone",w=bL.getClassName,bu=w(be),Q=w(be,cd),bD=w(r,bT,ar,bC),a8='<fieldset id="{id}" class="'+[Q].join(P)+'"></fieldset>',j='<legend class="'+bc+'"></legend>';var u=bL.Component.create({NAME:B,ATTRS:{acceptChildren:{value:true,readOnly:true},dataType:{value:undefined},template:{valueFn:function(){return a8;}},labelNode:{valueFn:function(){return bL.Node.create(j);}},templateNode:{valueFn:"getNode"}},UI_ATTRS:[c,aa,bP],CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{CONTENT_TEMPLATE:a8,renderUI:function(){var A=this;
var ch=A.get(az);var ci=A.get(b6);var L=A.get(b5);var cg=A.get(Y);var cf=A.get(bN);if(!ch.contains(ci)){ch.prepend(ci);}if(!L.contains(cg)){L.append(cg);}},getHTML:function(){var A=this;var L=A.get(bd);var cf=A.get(bW);return bL.substitute(L,{id:cf});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var cl=this;var L=cl.get(aQ);var A=L.get(ak);var cm=L.get(ae);if(!cl._renderedFieldsetSettings){cl._renderedFieldsetSettings=true;cl.fieldSettingsNode=bL.Node.create(bY);var ch=bL.Node.create(bY);var cj=bL.Node.create(ab);var ck=bL.Node.create(aO);ck.setContent(cm[O]);var cf=bL.Node.create(ca);var ci=cl.get(n)||cl.get(O);cf.setContent(ci);cj.append(ck);cj.append(cf);cj.appendTo(ch);cl.labelField=new bL.Field({type:"text",name:aa,labelText:"Label",value:cl.get(aa)}).render(ch);cl.labelField.get(cd).on({keyup:bL.bind(cl._onLabelKeyUp,cl)});cl.showLabelField=new bL.Field({type:"checkbox",name:bP,labelText:"Show label",labelAlign:"left",value:cl.get(bP)}).render(ch);var cg=cl.showLabelField.get(cd);cg.set(D,cl.get(bP));cg.on({change:bL.bind(cl._onSettingsFieldChange,cl)});cl.propertiesPanel=new bL.Panel({bodyContent:ch,collapsible:true,title:"Properties"}).render();cl.fieldSettingsNode.append(cl.propertiesPanel.get(az));}A.setContent(cl.fieldSettingsNode);},_uiSetAcceptChildren:function(ch){var A=this;var L=A.get(b5);var cg=A.get(aZ);var cf=L.one(bz+bD);if(ch&&!cf){L.append(cg);}else{if(!ch&&cf){cf.remove();}else{if(ch&&cf){A.set(aZ,cf);}}}}}});bL.FormBuilderFieldsetField=u;bL.FormBuilder.types["fieldset"]=bL.FormBuilderFieldsetField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,av=function(A){return(A instanceof bL.Node);},aP=function(A){return(A instanceof bL.NodeList);},az="boundingBox",b5="contentBox",ba="container",n="dataType",bz=".",bo="",a5="field",f="fields",be="form-builder-field",b4="form-builder-file-upload-field",bW="id",q="icon",aa="label",at="name",cd="node",a9="predefinedValue",P=" ",ae="strings",bd="template",bN="templateNode",bs="text",O="type",m="value",w=bL.getClassName,bu=w(be),Q=w(be,cd),by=w(bq,y),bm='<input id="{id}" class="'+[Q].join(P)+'" name="{name}" type="file" value="{value}" />';var E=bL.Component.create({NAME:b4,ATTRS:{template:{valueFn:function(){return bm;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{getHTML:function(){var A=this;var L=A.get(bd);var cj=A.get(bW);var cg=A.get(aa);var cf=A.get(at);var ch=A.get(ao);var ci=A.get(a9);return bL.substitute(L,{id:cj,label:cg,name:cf,value:ci});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var cl=this;var L=cl.get(aQ);var A=L.get(ak);var cm=L.get(ae);if(!cl._renderedFileUploadSettings){cl._renderedFileUploadSettings=true;cl.fieldSettingsNode=bL.Node.create(bY);var ch=bL.Node.create(bY);var cj=bL.Node.create(ab);var ck=bL.Node.create(aO);ck.setContent(cm[O]);var cf=bL.Node.create(ca);var ci=cl.get(n)||cl.get(O);cf.setContent(ci);cj.append(ck);cj.append(cf);cj.appendTo(ch);cl.labelField=new bL.Field({type:"text",name:aa,labelText:"Label",value:cl.get(aa)}).render(ch);cl.labelField.get(cd).on({keyup:bL.bind(cl._onLabelKeyUp,cl)});cl.showLabelField=new bL.Field({type:"checkbox",name:bP,labelText:"Show label",labelAlign:"left",value:cl.get(bP)}).render(ch);var cg=cl.showLabelField.get(cd);cg.set(D,cl.get(bP));cg.on({change:bL.bind(cl._onSettingsFieldChange,cl)});cl._renderSettingsFields([{type:"text",name:at,labelText:"Name",value:cl.get(at)},{type:"checkbox",name:aj,labelText:"Required",labelAlign:"left",value:cl.get(aj)}],ch);cl.propertiesPanel=new bL.Panel({bodyContent:ch,collapsible:true,title:"Properties"}).render();cl.fieldSettingsNode.append(cl.propertiesPanel.get(az));}A.setContent(cl.fieldSettingsNode);}}});bL.FormBuilderFileUploadField=E;bL.FormBuilder.types["fileupload"]=bL.FormBuilderFileUploadField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,av=function(A){return(A instanceof bL.Node);},aP=function(A){return(A instanceof bL.NodeList);},aV=bL.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),I="add",af="addNode",az="boundingBox",b1="button",bZ="buttonType",b5="contentBox",ba="container",y="default",al="defaultLabel",s="defaultOptions",z="defaultValue",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",bo="",a5="field",f="fields",be="form-builder-field",F="form-builder-multiple-choice-field",q="icon",bW="id",aL="input",Z="item",aa="label",b0="multiple",at="name",cd="node",bQ="option",bk="optionTemplate",bO="options",a9="predefinedValue",a6="proxy",p="remove",bA="reset",bn="submit",P=" ",bd="template",bN="templateNode",bs="text",O="type",m="value",w=bL.getClassName,aw=w(a5,aL),bS=w(a5,aL,bs),k=w(a5,bO,I),M=w(a5,bO,Z),K=w(a5,bO,Z,aL),a7=w(a5,bO,Z,aL,aa),bM=w(a5,bO,Z,aL,m),aU=w(a5,bO,Z,p),bu=w(be),Q=w(be,cd),by=w(bq,y),bx='<div class="'+[M,ac,b9].join(P)+'">'+'<input type="text" class="'+[K,a7,aw,bS].join(P)+'" value="{label}" />'+'<input type="text" class="'+[K,bM,aw,bS].join(P)+'" value="{value}" />'+'<a href="javascript:;" class="'+aU+'">&nbsp;</a>'+"</div>";TPL_ADD='<a class="'+k+'" href="javascript:;">Add an option</a>',ENTER="ENTER";var aH=bL.Component.create({NAME:bO,ATTRS:{allowClear:{value:false},defaultLabel:{value:bo},defaultValue:{value:bo},options:{value:[],getter:"_getOptions",validator:aG},addNode:{valueFn:function(){return bL.Node.create(TPL_ADD);}}},HTML_PARSER:{addNode:bz+k},UI_ATTRS:[bO],EXTENDS:bL.Widget,prototype:{renderUI:function(){var A=this;var L=A.get(az);var cf=A.get(af);if(!cf.inDoc()){L.append(cf);}},bindUI:function(){var A=this;var L=A.get(az);var cf=A.get(af);cf.on("click",bL.bind(A._onClickAdd,A));L.delegate("click",bL.bind(A._onClickOptionRemove,A),bz+aU);L.delegate("keypress",bL.bind(A._onKeyPressOption,A),bz+K);},add:function(L){var A=this;var cf=A.get(bO);cf.push(L);A.set(bO,cf);},clear:function(){var A=this;
if(A.get(ALLOW_CLEAR)){A.set(bO,[]);}},remove:function(cf){var A=this;var L=A.get(b5);var cg=A._getOptionNode(cf);if(cg){cg.remove();}A.items=L.all(bz+M);},_addNewOption:function(){var L=this;var cf=L.get(b5);var cg=L._createOption({label:L.get(al),value:L.get(z)});cg=bL.Node.create(cg);cf.append(cg);var A=cg.one(aL);A.focus();A.select();L.items=cf.all(bz+M);return cg;},_createOption:function(L){var A=this;return bL.substitute(bx,L);},_getOptionNode:function(L){var A=this;return A.items.item(L);},_getOptions:function(cf){var A=this;var L=[];if(A.items){bL.each(A.items,function(cg){var ci=cg.one(bz+a7);var ch=cg.one(bz+bM);L.push({label:ci.val(),value:ch.val()});});}else{L=cf;}return L;},_indexOfTarget:function(cf){var A=this;var L=cf.ancestor(bz+M);return A.items.indexOf(L);},_onClickAdd:function(L){var A=this;A._addNewOption();},_onClickOptionRemove:function(cg){var A=this;var cf=A.get(bO);var L=A._indexOfTarget(cg.target);A.remove(L);},_onKeyPressOption:function(ch){var A=this;var cg=A.get(bO);var cj=ch.currentTarget;var L=A.items;if(ch.isKey(ENTER)){var cf=A._indexOfTarget(cj);var ci=cj.hasClass(bM);if((cf==L.size()-1)&&ci){A._addNewOption();}}},_uiSetOptions:function(cg){var A=this;var cf=[];var L=A.get(b5);L.empty();bL.each(cg,function(ch){L.append(A._createOption(ch));});A.items=L.all(bz+M);}}});var e=bL.Component.create({NAME:F,ATTRS:{acceptChildren:{value:false,readOnly:true},options:{value:[{label:"option 1",value:"value 1"},{label:"option 2",value:"value 2"},{label:"option 3",value:"value 3"}]},optionTemplate:{value:'<option value="{value}">{label}</option>'}},UI_ATTRS:[c,a9,aa,at,bO,bP],CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{initializer:function(){var A=this;bL.FormBuilderMultipleChoiceField.superclass.initializer.apply(A,arguments);},getNode:function(){var A=this;return bL.FormBuilderMultipleChoiceField.superclass.getNode.apply(A,arguments);},renderSettings:function(){var A=this;bL.FormBuilderMultipleChoiceField.superclass.renderSettings.apply(A,arguments);if(!A._renderedMultipleChoiceSettings){A._renderedMultipleChoiceSettings=true;var L=bL.Node.create(bY);A.optionsPanel=new bL.Panel({bodyContent:L,collapsible:true,title:"Options"}).render();A.options=new aH({options:A.get(bO)}).render(L);A.fieldSettingsNode.append(A.optionsPanel.get(az));}},saveSettings:function(){var A=this;bL.FormBuilderMultipleChoiceField.superclass.saveSettings.apply(A,arguments);A.set(bO,A.options.get(bO));},_uiSetOptions:function(cf){var A=this;var L=A.get(bN);L.empty();bL.each(cf,function(cg){L.append(bL.substitute(A.get(bk),cg));});}}});bL.FormBuilderMultipleChoiceField=e;bL.FormBuilder.types["multiple-choice"]=bL.FormBuilderMultipleChoiceField;var bF=bL.Lang,aG=bF.isArray,a2=bF.isBoolean,bl=bF.isNumber,ah=bF.isString,az="boundingBox",d="bodyContent",D="checked",aq="choice",b5="contentBox",ba="container",bz=".",bo="",a5="field",f="fields",be="form-builder-field",aT="form-builder-radio-field",bW="id",q="icon",aM="inline",aa="label",g="labels",at="name",cd="node",bU="optionsContainerNode",a9="predefinedValue",J="radio",ao="size",P=" ",bd="template",bN="templateNode",m="value",w=bL.getClassName,b=w(a5),bI=w(a5,aq),bu=w(be),ay=w(be,J),Q=w(be,cd),N=w(be,bO,ba),by=w(bq,y),ac=w(a5,g,aM),bJ='<li class="'+[bV,a3,bu,ay].join(P)+'"></li>',R='<div class="'+N+'"></div>',aF='<input id="{id}" class="'+[Q,b,bI].join(P)+'" name="{name}" type="radio" value="{value}" {checked} />';var h=bL.Component.create({NAME:aT,ATTRS:{name:{value:J},optionTemplate:{value:aF},template:{valueFn:function(){return aF;}},optionsContainerNode:{valueFn:function(){return bL.Node.create(R);}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bu,HTML_PARSER:{optionsContainerNode:bz+N,templateNode:bz+Q},EXTENDS:bL.FormBuilderMultipleChoiceField,prototype:{BOUNDING_TEMPLATE:bJ,renderUI:function(){var A=this;var cg=A.get(az);var ci=A.get(b6);var L=A.get(b5);var cf=A.get(Y);if(!cg.contains(ci)){cg.prepend(ci);}if(!L.contains(cf)){L.append(cf);}var ch=A.get(bU);if(!L.contains(ch)){L.append(ch);}},getHTML:function(){var A=this;var L=A.get(bd);var ch=A.get(D);var cj=A.get(bW);var cg=A.get(aa);var cf=A.get(at);var ci=A.get(a9);return bL.substitute(L,{checked:ch?'checked="checked"':bo,id:cj,label:cg,name:cf,value:ci});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},_onFieldChange:function(L){var A=this;var cf=L.target;A.set(a9,cf.val());},_uiSetDisabled:function(cf){var A=this;var L=A.get(bU);L.all(aL).each(function(cg){if(cf){cg.setAttribute(bp,cf);}else{cg.removeAttribute(bp);}});},_uiSetOptions:function(ch){var A=this;var L=A.get(b5);var cg=A.get(bU);var cf=A.get(bN);cg.empty();bL.each(ch,function(ck){var ci=new bL.Field({type:J,disabled:A.get(bp),name:A.get(at),labelText:ck.label,labelAlign:"left",value:ck.value}).render(cg);var cj=ci.get(cd);if(ck.value==A.get(a9)){cj.set(D,true);}if(A.get(bp)){cj.setAttribute(bp,ch);}else{cj.removeAttribute(bp);}cj.on({change:bL.bind(A._onFieldChange,A)});});},_uiSetPredefinedValue:function(ch){var A=this;var L=A.get(aQ);var cf=L.get(ak);var cg=cf.one("input[name=predefinedValue]");if(cg){cg.val(ch);}}}});bL.FormBuilderRadioField=h;bL.FormBuilder.types["radio"]=bL.FormBuilderRadioField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,av=function(A){return(A instanceof bL.Node);},aP=function(A){return(A instanceof bL.NodeList);},aV=bL.cached(function(A){return A.substring(0,1).toUpperCase()+A.substring(1);}),az="boundingBox",b1="button",bZ="buttonType",b5="contentBox",ba="container",s="defaultOptions",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",bo="",a5="field",f="fields",be="form-builder-field",bK="form-builder-select-field",bW="id",q="icon",aL="input",aa="label",b0="multiple",at="name",cd="node",bQ="option",bO="options",aR="portalLayout",a9="predefinedValue",a6="proxy",bA="reset",bE="selectedIndex",bn="submit",P=" ",bd="template",bN="templateNode",bs="text",O="type",m="value",w=bL.getClassName,aw=w(a5,aL),bS=w(a5,aL,bs),bu=w(be),Q=w(be,cd),by=w(bq,y),ap='<select id="{id}" class="'+[Q].join(P)+'" name="{name}" value="{value}"></select>';
var X=bL.Component.create({NAME:bK,ATTRS:{multiple:{setter:bL.DataType.Boolean.parse,value:false},template:{valueFn:function(){return ap;}},templateNode:{valueFn:"getNode"}},UI_ATTRS:bL.FormBuilderField.UI_ATTRS.concat([b0]),CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var A=this;var L=A.get(bd);var ci=A.get(bW);var cg=A.get(aa);var cf=A.get(at);var ch=A.get(a9);return bL.substitute(L,{id:ci,label:cg,name:cf,value:ch});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var L=this;var ch=L.get(aQ);var ci=ch.get(ak);bL.FormBuilderSelectField.superclass.renderSettings.apply(L,arguments);if(!L._renderedSelectSettings){L._renderedSelectSettings=true;var A=L.propertiesPanel.get(d);var cf=new bL.Field({type:"checkbox",name:b0,labelText:"Multiple",labelAlign:"left"}).render(A.item(0));var cg=cf.get(cd);cg.on({change:bL.bind(L._onSettingsFieldChange,L)});cg.set(D,L.get(b0));}},_uiSetMultiple:function(cf){var A=this;var L=A.get(bN);if(cf){L.setAttribute(b0,b0);}else{L.removeAttribute(b0);}}}});bL.FormBuilderSelectField=X;bL.FormBuilder.types["select"]=bL.FormBuilderSelectField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,av=function(A){return(A instanceof bL.Node);},aP=function(A){return(A instanceof bL.NodeList);},az="boundingBox",b5="contentBox",ba="container",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",bo="",a5="field",f="fields",be="form-builder-field",aN="form-builder-input-field",bW="id",q="icon",aL="input",aa="label",at="name",cd="node",aR="portalLayout",a9="predefinedValue",a6="proxy",P=" ",bd="template",bN="templateNode",bs="text",m="value",w=bL.getClassName,aw=w(a5,aL),bS=w(a5,aL,bs),bu=w(be),Q=w(be,cd),by=w(bq,y),bt='<input id="{id}" class="'+[Q,aw,bS].join(P)+'" name="{name}" type="text" value="{value}" />';var au=bL.Component.create({NAME:aN,ATTRS:{template:{valueFn:function(){return bt;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{bindUI:function(){var A=this;bL.FormBuilderTextField.superclass.bindUI.apply(A,arguments);var L=A.get(bN);L.on({"keyup":bL.bind(A._onValueKeyUp,A)});},getHTML:function(){var A=this;var L=A.get(bd);var cj=A.get(bW);var cg=A.get(aa);var cf=A.get(at);var ch=A.get(ao);var ci=A.get(a9);return bL.substitute(L,{id:cj,label:cg,name:cf,value:ci});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(aQ);var cf=L.get(ak);bL.FormBuilderTextField.superclass.renderSettings.apply(A,arguments);if(!A._renderedInputSettings){A._renderedInputSettings=true;var cg=cf.one("input[name=predefinedValue]");cg.on({"keyup":bL.bind(A._onValueKeyUp,A)});}},_onValueKeyUp:function(L){var A=this;var cf=L.target;A.set(a9,cf.val());}}});bL.FormBuilderTextField=au;bL.FormBuilder.types["text"]=bL.FormBuilderTextField;var bF=bL.Lang,aG=bF.isArray,bl=bF.isNumber,ah=bF.isString,az="boundingBox",b5="contentBox",ba="container",bz=".",aS="drag",bj="dragContainer",b7="dragContainerNode",ad="dragNodesList",ar="drop",aK="dropContainer",a4="dropContainerNode",bo="",a5="field",f="fields",be="form-builder-field",v="form-builder-textarea-field",bW="id",q="icon",aa="label",at="name",cd="node",aR="portalLayout",a9="predefinedValue",a6="proxy",ao="size",P=" ",bd="template",bN="templateNode",bs="text",bw="textarea",m="value",w=bL.getClassName,b=w(a5),bb=w(a5,bs),bR=w(a5,bw),bu=w(be),Q=w(be,cd),by=w(bq,y),bG='<textarea id="{id}" class="'+[Q,b,bb,bR].join(P)+'" name="{name}">{value}</textarea>';var ax=bL.Component.create({NAME:v,ATTRS:{template:{valueFn:function(){return bG;}},templateNode:{valueFn:"getNode"}},CSS_PREFIX:bu,HTML_PARSER:{templateNode:bz+Q},EXTENDS:bL.FormBuilderField,prototype:{bindUI:function(){var A=this;bL.FormBuilderTextAreaField.superclass.bindUI.apply(A,arguments);var L=A.get(bN);L.on({"keyup":bL.bind(A._onValueKeyUp,A)});},getHTML:function(){var A=this;var L=A.get(bd);var cj=A.get(bW);var cg=A.get(aa);var cf=A.get(at);var ch=A.get(ao);var ci=A.get(a9);return bL.substitute(L,{id:cj,label:cg,name:cf,value:ci});},getNode:function(){var A=this;return bL.Node.create(A.getHTML());},renderSettings:function(){var A=this;var L=A.get(aQ);var cf=L.get(ak);bL.FormBuilderTextAreaField.superclass.renderSettings.apply(A,arguments);if(!A._renderedTextareaSettings){A._renderedTextareaSettings=true;var cg=cf.one("input[name=predefinedValue]");cg.on({"keyup":bL.bind(A._onValueKeyUp,A)});}},_onValueKeyUp:function(L){var A=this;var cf=L.target;A.set(a9,cf.val());}}});bL.FormBuilderTextAreaField=ax;bL.FormBuilder.types["textarea"]=bL.FormBuilderTextAreaField;},"@VERSION@",{requires:["aui-datatype","aui-form","aui-panel","io","substitute"],skinnable:true});