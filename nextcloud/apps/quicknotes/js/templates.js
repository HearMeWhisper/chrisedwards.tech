(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navigation'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "				<button class=\"circle-toolbar\" style=\"background-color: "
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data,"loc":{"start":{"line":18,"column":60},"end":{"line":18,"column":69}}}) : helper)))
    + " \"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "			<li class=\"nav-note with-menu "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":33},"end":{"line":28,"column":60}}})) != null ? stack1 : "")
    + "\"  data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":28,"column":72},"end":{"line":28,"column":80}}}) : helper)))
    + "\">\n				<a href=\"#\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":29}}}) : helper))) != null ? stack1 : "")
    + "</a>\n			</li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "active";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "			<li class=\"nav-tag with-menu "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":32},"end":{"line":39,"column":59}}})) != null ? stack1 : "")
    + "\" tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":39,"column":69},"end":{"line":39,"column":77}}}) : helper)))
    + "\">\n				<a href=\"#\">"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":40,"column":16},"end":{"line":40,"column":28}}}) : helper))) != null ? stack1 : "")
    + "</a>\n			</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div id=\"new-note-fixed\">\n	<div>\n		<button type=\"button\" id=\"new-note\" class=\"icon-add\">"
    + alias5(((helper = (helper = helpers.newNoteTxt || (depth0 != null ? depth0.newNoteTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"newNoteTxt","hash":{},"data":data,"loc":{"start":{"line":3,"column":55},"end":{"line":3,"column":69}}}) : helper)))
    + "</button>\n	</div>\n</div>\n<li id=\"all-notes\">\n	<a href=\"#\" class=\"icon-home svg\">\n		"
    + alias5(((helper = (helper = helpers.allNotesTxt || (depth0 != null ? depth0.allNotesTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"allNotesTxt","hash":{},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":17}}}) : helper)))
    + "\n	</a>\n</li>\n<li id=\"colors-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-search svg\">"
    + alias5(((helper = (helper = helpers.colorsTxt || (depth0 != null ? depth0.colorsTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"colorsTxt","hash":{},"data":data,"loc":{"start":{"line":13,"column":37},"end":{"line":13,"column":50}}}) : helper)))
    + "</a>\n	<ul>\n		<li style=\"display: flex; justify-content: center;\">\n			<button class=\"circle-toolbar icon-checkmark any-color\"></button>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":19,"column":12}}})) != null ? stack1 : "")
    + "		</li>\n	</ul>\n</li>\n<li id=\"notes-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-folder svg\">"
    + alias5(((helper = (helper = helpers.notesTxt || (depth0 != null ? depth0.notesTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"notesTxt","hash":{},"data":data,"loc":{"start":{"line":25,"column":37},"end":{"line":25,"column":49}}}) : helper)))
    + "</a>\n	<ul>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\n</li>\n<li id=\"tags-folder\" class=\"collapsible open\">\n	<button class=\"collapse\"></button>\n	<a href=\"#\" class=\"icon-tag svg\">"
    + alias5(((helper = (helper = helpers.tagsTxt || (depth0 != null ? depth0.tagsTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"tagsTxt","hash":{},"data":data,"loc":{"start":{"line":36,"column":34},"end":{"line":36,"column":45}}}) : helper)))
    + "</a>\n	<ul>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":2},"end":{"line":42,"column":11}}})) != null ? stack1 : "")
    + "	</ul>\n</li>\n";
},"useData":true});
templates['note-item'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "note-active";
},"3":function(container,depth0,helpers,partials,data) {
    return "shared";
},"5":function(container,depth0,helpers,partials,data) {
    return "shareowner";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "		<div>\n			<div class='icon-share shared-title' title=\"Shared by "
    + container.escapeExpression(((helper = (helper = helpers.userid || (depth0 != null ? depth0.userid : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"userid","hash":{},"data":data,"loc":{"start":{"line":5,"column":57},"end":{"line":5,"column":69}}}) : helper)))
    + "\"></div>\n			<div class='note-title'>\n				"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n		<div id='content' class='note-content'>\n			"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "		<div>\n			<div class=\"icon-delete hide-delete-icon icon-delete-note\" title=\"Delete\"></div>\n			<!--\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sharedwith : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "			-->\n			<div class='note-title'>\n				"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n		<div class='note-content'>\n			"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":26,"column":3},"end":{"line":26,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n		<div class='note-tags'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":3},"end":{"line":31,"column":12}}})) != null ? stack1 : "")
    + "		</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "			<div class='icon-share shared-title-owner' title=\"Shared with "
    + container.escapeExpression(((helper = (helper = helpers.sharedwith || (depth0 != null ? depth0.sharedwith : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sharedwith","hash":{},"data":data,"loc":{"start":{"line":18,"column":65},"end":{"line":18,"column":81}}}) : helper)))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "				<div class=\"slim-tag\" tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":30,"column":34},"end":{"line":30,"column":42}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":30,"column":44},"end":{"line":30,"column":56}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"note-grid-item\">\n	<div class=\"quicknote noselect "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":64}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isshared : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":65},"end":{"line":2,"column":94}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sharedwith : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":95},"end":{"line":2,"column":130}}})) != null ? stack1 : "")
    + "\" style=\"background-color: "
    + alias5(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":2,"column":157},"end":{"line":2,"column":166}}}) : helper)))
    + "\" data-id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":177},"end":{"line":2,"column":185}}}) : helper)))
    + "\" data-timestamp=\""
    + alias5(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"timestamp","hash":{},"data":data,"loc":{"start":{"line":2,"column":203},"end":{"line":2,"column":218}}}) : helper)))
    + "\" >\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isshared : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":33,"column":9}}})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"useData":true});
templates['notes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"notes-grid\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.notes : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":41,"column":10}}})) != null ? stack1 : "")
    + "</div>\n<div id=\"modal-note-div\" class=\"hide-modal-note modal-note-background\">\n	<div class=\"modal-content\">\n		<div class=\"quicknote note-active\" style=\"background-color: #F7EB96\" data-id=\"-1\">\n			<div>\n				<div contenteditable=\"true\" id='title-editable' class='note-title'></div>\n			</div>\n			<div contenteditable=\"true\" id='content-editable' class='note-content'></div>\n			<div class='note-tags'></div>\n			<div class=\"note-options\">\n				<!--\n				<select class=\"note-share-select\" name=\"users[]\" multiple=\"multiple\"></select>\n				-->\n				<div class=\"note-toolbar\">\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #F7EB96\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #88B7E3\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #C1ECB0\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #BFA6E9\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #DAF188\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #FF96AC\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #FCF66F\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #F2F1EF\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #C1D756\"></a>\n					<a href=\"#\" class=\"circle-toolbar\" style=\"background-color: #CECECE\"></a>\n				</div>\n				<div class=\"save-button\">\n					<!--\n					<button id='share-button'><?php p($l->t('Share'));?></button>\n					-->\n					<button id='tag-button'>\n						"
    + alias5(((helper = (helper = helpers.tagTxt || (depth0 != null ? depth0.tagTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"tagTxt","hash":{},"data":data,"loc":{"start":{"line":72,"column":6},"end":{"line":72,"column":18}}}) : helper)))
    + "\n					</button>\n					<button id='cancel-button'>\n						"
    + alias5(((helper = (helper = helpers.cancelTxt || (depth0 != null ? depth0.cancelTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"cancelTxt","hash":{},"data":data,"loc":{"start":{"line":75,"column":6},"end":{"line":75,"column":21}}}) : helper)))
    + "\n					</button>\n					<button id='save-button'>\n						"
    + alias5(((helper = (helper = helpers.saveTxt || (depth0 != null ? depth0.saveTxt : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"saveTxt","hash":{},"data":data,"loc":{"start":{"line":78,"column":6},"end":{"line":78,"column":19}}}) : helper)))
    + "\n					</button>\n					</div>\n						<div style=\"clear: both;\"></div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "	<div class=\"note-grid-item\">\n		<div class=\"quicknote noselect "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":33},"end":{"line":5,"column":65}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isshared : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":66},"end":{"line":5,"column":95}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sharedwith : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":96},"end":{"line":5,"column":131}}})) != null ? stack1 : "")
    + "\" style=\"background-color: "
    + alias5(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"color","hash":{},"data":data,"loc":{"start":{"line":5,"column":158},"end":{"line":5,"column":167}}}) : helper)))
    + "\" data-id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":178},"end":{"line":5,"column":186}}}) : helper)))
    + "\" data-timestamp=\""
    + alias5(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"timestamp","hash":{},"data":data,"loc":{"start":{"line":5,"column":204},"end":{"line":5,"column":219}}}) : helper)))
    + "\" >\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isshared : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":38,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "note-active";
},"5":function(container,depth0,helpers,partials,data) {
    return "shared";
},"7":function(container,depth0,helpers,partials,data) {
    return "shareowner";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "			<div>\n				<div class='icon-share shared-title' title=\"Shared by "
    + container.escapeExpression(((helper = (helper = helpers.userid || (depth0 != null ? depth0.userid : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"userid","hash":{},"data":data,"loc":{"start":{"line":8,"column":58},"end":{"line":8,"column":70}}}) : helper)))
    + "\"></div>\n				<div class='note-title'>\n					"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":10,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n			<div id='content' class='note-content'>\n				"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n			</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "			<div>\n				<div class=\"icon-delete hide-delete-icon icon-delete-note\" title=\"Delete\"></div>\n				<!--\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.sharedwith : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "				-->\n				<div class='note-title'>\n					"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":25,"column":5},"end":{"line":25,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n			<div class='note-content'>\n				"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":29,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n			</div>\n			<div class='note-tags'>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":36,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "				<div class='icon-share shared-title-owner' title=\"Shared with "
    + container.escapeExpression(((helper = (helper = helpers.sharedwith || (depth0 != null ? depth0.sharedwith : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sharedwith","hash":{},"data":data,"loc":{"start":{"line":21,"column":66},"end":{"line":21,"column":82}}}) : helper)))
    + "\"></div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "					<div class='slim-tag' tag-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":35},"end":{"line":33,"column":43}}}) : helper)))
    + "\">\n						"
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":34,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n					</div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.loaded : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":88,"column":0},"end":{"line":103,"column":0}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<div class=\"emptycontent\">\n	<div class=\"icon-edit svg\"></div>\n	<h2>\n		"
    + container.escapeExpression(((helper = (helper = helpers.emptyMsg || (depth0 != null ? depth0.emptyMsg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"emptyMsg","hash":{},"data":data,"loc":{"start":{"line":92,"column":2},"end":{"line":92,"column":16}}}) : helper)))
    + "\n	</h2>\n</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"emptycontent\">\n	<div class=\"icon-edit svg\"></div>\n	<h2>\n		"
    + alias5(((helper = (helper = helpers.loadingMsg || (depth0 != null ? depth0.loadingMsg : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"loadingMsg","hash":{},"data":data,"loc":{"start":{"line":99,"column":2},"end":{"line":99,"column":16}}}) : helper)))
    + "\n	</h2>\n	<img class=\"loadingimport\" src=\""
    + alias5(((helper = (helper = helpers.loadingIcon || (depth0 != null ? depth0.loadingIcon : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"loadingIcon","hash":{},"data":data,"loc":{"start":{"line":101,"column":33},"end":{"line":101,"column":48}}}) : helper)))
    + "\"/>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.notes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":103,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();