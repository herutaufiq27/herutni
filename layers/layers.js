var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_wilayahadm_kelurahantangsel_1 = new ol.format.GeoJSON();
var features_wilayahadm_kelurahantangsel_1 = format_wilayahadm_kelurahantangsel_1.readFeatures(json_wilayahadm_kelurahantangsel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayahadm_kelurahantangsel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayahadm_kelurahantangsel_1.addFeatures(features_wilayahadm_kelurahantangsel_1);
var lyr_wilayahadm_kelurahantangsel_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wilayahadm_kelurahantangsel_1, 
                style: style_wilayahadm_kelurahantangsel_1,
                interactive: true,
                title: '<img src="styles/legend/wilayahadm_kelurahantangsel_1.png" /> wilayah adm_kelurahantangsel'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_Meninggal_4 = new ol.format.GeoJSON();
var features_Meninggal_4 = format_Meninggal_4.readFeatures(json_Meninggal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meninggal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meninggal_4.addFeatures(features_Meninggal_4);
var lyr_Meninggal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Meninggal_4, 
                style: style_Meninggal_4,
                interactive: true,
                title: '<img src="styles/legend/Meninggal_4.png" /> Meninggal'
            });
var format_ODP_Tangsel_5 = new ol.format.GeoJSON();
var features_ODP_Tangsel_5 = format_ODP_Tangsel_5.readFeatures(json_ODP_Tangsel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODP_Tangsel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODP_Tangsel_5.addFeatures(features_ODP_Tangsel_5);
var lyr_ODP_Tangsel_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ODP_Tangsel_5, 
                style: style_ODP_Tangsel_5,
                interactive: true,
                title: '<img src="styles/legend/ODP_Tangsel_5.png" /> ODP_Tangsel'
            });
var format_PDP_Tangsel_6 = new ol.format.GeoJSON();
var features_PDP_Tangsel_6 = format_PDP_Tangsel_6.readFeatures(json_PDP_Tangsel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDP_Tangsel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDP_Tangsel_6.addFeatures(features_PDP_Tangsel_6);
var lyr_PDP_Tangsel_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PDP_Tangsel_6, 
                style: style_PDP_Tangsel_6,
                interactive: true,
                title: '<img src="styles/legend/PDP_Tangsel_6.png" /> PDP_Tangsel'
            });
var format_Positif_Tangsel_7 = new ol.format.GeoJSON();
var features_Positif_Tangsel_7 = format_Positif_Tangsel_7.readFeatures(json_Positif_Tangsel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Positif_Tangsel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Positif_Tangsel_7.addFeatures(features_Positif_Tangsel_7);
var lyr_Positif_Tangsel_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Positif_Tangsel_7, 
                style: style_Positif_Tangsel_7,
                interactive: true,
                title: '<img src="styles/legend/Positif_Tangsel_7.png" /> Positif_Tangsel'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_wilayahadm_kelurahantangsel_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_Meninggal_4.setVisible(true);lyr_ODP_Tangsel_5.setVisible(true);lyr_PDP_Tangsel_6.setVisible(true);lyr_Positif_Tangsel_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_wilayahadm_kelurahantangsel_1,lyr_Sungai_2,lyr_Jalan_3,lyr_Meninggal_4,lyr_ODP_Tangsel_5,lyr_PDP_Tangsel_6,lyr_Positif_Tangsel_7];
lyr_wilayahadm_kelurahantangsel_1.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jml_Pen_lk': 'Jml_Pen_lk', 'Jml_Pen_PR': 'Jml_Pen_PR', 'Jml_PenTol': 'Jml_PenTol', 'Sex Ratio': 'Sex Ratio', });
lyr_Sungai_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_Jalan_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Meninggal_4.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'jml_menggl': 'jml_menggl', });
lyr_ODP_Tangsel_5.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jumlah ODP': 'Jumlah ODP', });
lyr_PDP_Tangsel_6.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'jml_pdp': 'jml_pdp', });
lyr_Positif_Tangsel_7.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jml_positi': 'Jml_positi', });
lyr_wilayahadm_kelurahantangsel_1.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jml_Pen_lk': 'TextEdit', 'Jml_Pen_PR': 'TextEdit', 'Jml_PenTol': 'TextEdit', 'Sex Ratio': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Meninggal_4.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'jml_menggl': 'TextEdit', });
lyr_ODP_Tangsel_5.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jumlah ODP': 'TextEdit', });
lyr_PDP_Tangsel_6.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'jml_pdp': 'TextEdit', });
lyr_Positif_Tangsel_7.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jml_positi': 'TextEdit', });
lyr_wilayahadm_kelurahantangsel_1.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jml_Pen_lk': 'no label', 'Jml_Pen_PR': 'no label', 'Jml_PenTol': 'no label', 'Sex Ratio': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Meninggal_4.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'jml_menggl': 'no label', });
lyr_ODP_Tangsel_5.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jumlah ODP': 'no label', });
lyr_PDP_Tangsel_6.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'jml_pdp': 'no label', });
lyr_Positif_Tangsel_7.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jml_positi': 'no label', });
lyr_Positif_Tangsel_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});