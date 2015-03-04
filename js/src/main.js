
requirejs.config({

	baseUrl: "js",

	paths: {
		src: "./src"
	}
});


require(["src/Game", "src/Tetris"], function(Game, Tetris) {

	var App = Game.extend({

		init: function() {
			canvas.width = 480;
			canvas.height = 272;
			canvas.scale = 1.5;

			content.load("back", "res/back.png");
			content.load("blocks", "res/blocks.png");
			content.load("numbers", "res/numbers.png");

			input.bindKey("space", input.Keys.SPACE);
			input.bindKey("left", [input.Keys.LEFT_ARROW, input.Keys.A]);
			input.bindKey("up", [input.Keys.UP_ARROW, input.Keys.W]);
			input.bindKey("right", [input.Keys.RIGHT_ARROW, input.Keys.D]);
			input.bindKey("down", [input.Keys.DOWN_ARROW, input.Keys.S]);
			input.bindKey("pause", input.Keys.P);

			this.hasLoad = false;
		},

		tick: function() {

			if (this.hasLoad) {

				this.tetris.update(input);
				this.tetris.draw(canvas.ctx);

			} else {

				this.hasLoad = content.progress() === 1;
				
				if (this.hasLoad) {
					this.tetris = new Tetris(10, 22, 5);
				}
			}
		}
	});


	(function() {
			// debugger;
			// window.game = new App();
			// window.game.run();
			// window.onblur = window.game.stop.bind(window.game);
			// window.onfocus = window.game.run.bind(window.game);
			// window.onkeydown = window.game.run.bind(window.game);

			$( ".new-game" ).click(function() {
  				window.game = new App();
  				window.game.run();
  				window.onblur = window.game.stop.bind(window.game);
				window.onfocus = window.game.run.bind(window.game);
				window.onkeydown = window.game.run.bind(window.game);
				$(".new-game").css("display", "none")
			});
			$( ".restart-game" ).click(function() {
  				window.game = new App();
  				window.game.run();
  				window.onblur = window.game.stop.bind(window.game);
				window.onfocus = window.game.run.bind(window.game);
				window.onkeydown = window.game.run.bind(window.game);
				$(".lose-menu").css("display", "none")
			});
		
		
	})();
});