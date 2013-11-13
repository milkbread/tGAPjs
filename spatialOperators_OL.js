function spatialOperators_OL(){
	//console.log(OpenLayers)
	try
	  {
	  OpenLayers;
	  }
	catch(err)
	  {
	  	var message = 'Please import OpenLayers to your html-file!';
	  	alert(message)
	  	return;
	  	//throw message;
	  }
	
	this.getLength=function(points){
		var line = new OpenLayers.Geometry.LineString(points.map(function(d){return new OpenLayers.Geometry.Point( d[0], d[1] )}))
		//console.log(line.getGeodesicLength())
		return line.getGeodesicLength();
		}
	this.getArea=function(edges_, directions){
		var points_cache = [];
		edges_.map(function(edge,i){
			if(directions[i]==true){
				var cache = [];
				for(var i=edge.geometry.length-1;i>=0;i--){
					cache.push(edge.geometry[i]);
				}
				cache.forEach(function(p){points_cache.push(new OpenLayers.Geometry.Point( p[0], p[1] ))})
			}
			else{
				edge.geometry.forEach(function(p){points_cache.push(new OpenLayers.Geometry.Point( p[0], p[1] ))})
			}
		})
		var ring = new OpenLayers.Geometry.LinearRing(points_cache);
		//console.log('calc_length1:',ring.getGeodesicArea())
		//console.log(edges_.length)
		return ring.getGeodesicArea();
				
	}
}
