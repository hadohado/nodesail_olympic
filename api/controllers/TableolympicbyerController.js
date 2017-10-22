/**
 * TableolympicbyerController
 *
 * @description :: Server-side logic for managing tableolympicbyers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res) {
		res.view();
	},

	create: function(req, res, next) {
		Tableolympicbyer.create(req.params.all(), function tableolympicbyerCreated(err, tableolympicbyer) {
			if (err) return next(err);

			// res.json(tableolympicbyers);
			res.redirect('/tableolympicbyer/show/' + tableolympicbyer.id);
		});
	},

	show: function(req, res, next) {
		Tableolympicbyer.findOne(req.param('id'), function foundTableolympicbyer(err, tableolympicbyer) {
			if (err) return next(err);
			if (!tableolympicbyer) return next();
			res.view({
				tableolympicbyer: tableolympicbyer
			});			
		});
	}
};

