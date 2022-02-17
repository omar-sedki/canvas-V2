/*! 
 * canvas-v2.js 0.0.1 - 2022-02-10
 * Copyright (c) 2022 omar-sedki; Licensed MIT
 */
CanvasRenderingContext2D.prototype.originalRect=CanvasRenderingContext2D.prototype.rect,CanvasRenderingContext2D.prototype.originalArc=CanvasRenderingContext2D.prototype.arc,CanvasRenderingContext2D.prototype.originalMoveTo=CanvasRenderingContext2D.prototype.moveTo,CanvasRenderingContext2D.prototype.originalBeginPath=CanvasRenderingContext2D.prototype.beginPath,CanvasRenderingContext2D.prototype.originalLineTo=CanvasRenderingContext2D.prototype.lineTo,CanvasRenderingContext2D.prototype.originalClosePath=CanvasRenderingContext2D.prototype.closePath,CanvasRenderingContext2D.prototype.originalArcTo=CanvasRenderingContext2D.prototype.arcTo;class shape2D{constructor(t,i){this.points=t,this.options=i}borderRadius(t){let i=this.options&&this.options.borderRadius?this.options.borderRadius:0;return"number"==typeof i?i:"object"==typeof i&&i.length==this.points.length?i[t]:0}createPath(t){t.beginPath();for(let i=0;i<this.points.length;i++){let n=0==i?this.points.length-1:i-1,e=i==this.points.length-1?0:i+1,o=new line({x:this.points[i].x,y:this.points[i].y},{x:this.points[n].x,y:this.points[n].y}).getPointOnLineDistanceFrom("A",this.borderRadius(i)),r=new line({x:this.points[i].x,y:this.points[i].y},{x:this.points[e].x,y:this.points[e].y}).getPointOnLineDistanceFrom("A",this.borderRadius(i)),s=new line({x:this.points[i].x,y:this.points[i].y},{x:this.points[e].x,y:this.points[e].y}).getPointOnLineDistanceFrom("B",this.borderRadius(e));0==i&&t.originalMoveTo(o.x,o.y),t.originalArcTo(this.points[i].x,this.points[i].y,r.x,r.y,this.borderRadius(i)),t.originalLineTo(s.x,s.y)}t.closePath()}}class point{constructor(t,i){this.x=t,this.y=i}}class line{constructor(t,i){this.pointA=t,this.pointB=i}length(){return Math.sqrt(Math.pow(this.pointA.x-this.pointB.x,2)+Math.pow(this.pointA.y-this.pointB.y,2),2)}getPointOnLineDistanceFrom(t,i){let n={};return n.x=(this.pointB.x-this.pointA.x)*i/this.length(),n.y=(this.pointB.y-this.pointA.y)*i/this.length(),"A"==t&&(n.x=this.pointA.x+n.x,n.y=this.pointA.y+n.y),"B"==t&&(n.x=this.pointB.x-n.x,n.y=this.pointB.y-n.y),n}}function percentToNumber(t,i){return"string"==typeof t&&/\s*(\d+(?:\.\d+)?)\s*%\s*/.test(t)&&(t=Number(RegExp.$1)*i/100),t}const roundCorner=(t,i,n,e)=>{t.originalMoveTo(i.x,i.y),t.originalLineTo(n.x,n.y),t.originalLineTo(e.x,e.y)};CanvasRenderingContext2D.prototype.lineTo=function(t,i){this.originalLineTo(t,i),this._lastPoint={x:t,y:i}},CanvasRenderingContext2D.prototype.moveTo=function(t,i){this.originalMoveTo(t,i),this._lastPoint={x:t,y:i}},CanvasRenderingContext2D.prototype.square=function(t,i,n,e){t=percentToNumber(t,this.canvas.width),i=percentToNumber(i,this.canvas.height),n=percentToNumber(n,this.canvas.width);const o=[];o.push({x:t,y:i}),o.push({x:t+n,y:i}),o.push({x:t+n,y:i+n}),o.push({x:t,y:i+n}),new shape2D(o,e).createPath(this)},CanvasRenderingContext2D.prototype.triangle=function(t,i,n,e){triangle=new shape2D([t,i,n],e),triangle.createPath(this)},CanvasRenderingContext2D.prototype.rect=function(t,i,n,e,o){if(t=percentToNumber(t,this.canvas.width),i=percentToNumber(i,this.canvas.height),n=percentToNumber(n,this.canvas.width),e=percentToNumber(e,this.canvas.height),o){var r=o.borderRadius?o.borderRadius:0,s={x:t,y:i},a={x:t+n,y:i},h={x:t+n,y:i+e},p={x:t,y:i+e};"number"==typeof r&&(s.r=r,a.r=r,h.r=r,p.r=r),"object"==typeof r&&2==r.length&&(s.r=r[0],a.r=r[1],h.r=r[0],p.r=r[1]),"object"==typeof r&&3==r.length&&(s.r=r[0],a.r=r[1],h.r=r[2],p.r=r[1]),"object"==typeof r&&4==r.length&&(s.r=r[0],a.r=r[1],h.r=r[2],p.r=r[3]);var y=ctx.lineCap;this.lineCap="square",this.originalMoveTo(s.x+s.r,s.y),this.originalLineTo(a.x-a.r,a.y),this.originalArcTo(a.x,a.y,a.x,a.y+a.r,a.r),this.originalLineTo(h.x,h.y-h.r),this.originalArcTo(h.x,h.y,h.x-h.r,h.y,h.r),this.originalLineTo(p.x+p.r,p.y),this.originalArcTo(p.x,p.y,p.x,p.y-p.r,p.r),this.originalLineTo(s.x,s.y+s.r),this.originalArcTo(s.x,s.y,s.x+s.r,s.y,s.r),this.lineCap=y}else this.originalRect(t,i,n,e)},CanvasRenderingContext2D.prototype.circle=function(t,i,n){t=percentToNumber(t,this.canvas.width),i=percentToNumber(i,this.canvas.height),n=percentToNumber(n,this.canvas.width),this.originalArc(t,i,n,0,2*Math.PI)};