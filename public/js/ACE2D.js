var ACE2D = ACE2D || function () {

	// Isomer Defaults
	var Point  = Isomer.Point;
	var Path   = Isomer.Path;
	var Shape  = Isomer.Shape;
	var Vector = Isomer.Vector;
	var Color  = Isomer.Color;

	var iso = new Isomer(document.querySelector('canvas'));

	var gay = new Color(255, 0, 93);
	var azulverde = new Color(0, 229, 225);
	var azul = new Color(50, 60, 160);

	// Chão
	var cube = Shape.Prism(Point.ORIGIN, 20, 20, 0.5)
	  .rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 2.5)
	iso.add(cube);

	iso.add(Shape.Prism(new Point(0, 16, 0), 20, 4, 6)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, azul);

	iso.add(Shape.Prism(new Point(0, 0, 0), 20, 4, 6)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, azul);

	iso.add(Shape.Prism(new Point(15, 15.8, 0), 3, 0.2, 3.5)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, gay);

	iso.add(Shape.Prism(new Point(12, 15.8, 0), 3, 0.2, 3.5)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, azulverde);

	iso.add(Shape.Prism(new Point(9, 15.8, 0), 3, 0.2, 3.5)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, gay);

	iso.add(Shape.Prism(new Point(6, 15.8, 0), 3, 0.2, 3.5)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, azulverde);

	iso.add(Shape.Prism(new Point(3, 15.8, 0), 3, 0.2, 3.5)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, gay);

	iso.add(Shape.Prism(new Point(0, 15.8, 0), 3, 0.2, 3.5)
		.rotateZ(Point(1.5, 1.5, 0), Math.PI / 12)
	  .translate(0, -2.5, 3)
	, azulverde);

};

module.exports = ACE2D;
