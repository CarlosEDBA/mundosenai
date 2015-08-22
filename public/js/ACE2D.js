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
	var cube = Shape.Prism(Point.ORIGIN, 20, 20, 0.5);
	iso.add(cube);

	iso.add(Shape.Prism(new Point(0, 15, 0), 20, 5, 6)
	  .translate(0, 0, 0.5)
	, azul);

	iso.add(Shape.Prism(new Point(9, 14.8, 0), 3, 0.2, 3.5)
	  /* (1.5, 1.5) is the center of the prism */
	  .translate(0, 0, 0.5)
	, gay);

	iso.add(Shape.Prism(new Point(6, 14.8, 0), 3, 0.2, 3.5)
	  /* (1.5, 1.5) is the center of the prism */
	  .translate(0, 0, 0.5)
	, azulverde);

	iso.add(Shape.Prism(new Point(3, 14.8, 0), 3, 0.2, 3.5)
	  /* (1.5, 1.5) is the center of the prism */
	  .translate(0, 0, 0.5)
	, gay);

	iso.add(Shape.Prism(new Point(0, 14.8, 0), 3, 0.2, 3.5)
	  /* (1.5, 1.5) is the center of the prism */
	  .translate(0, 0, 0.5)
	, azulverde);

};

module.exports = ACE2D;
