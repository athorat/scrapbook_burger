 $(document).ready(function () {
              $(".quicklook").click(function () {
                  var data = {
                      deal: [
                          {
                              imgSrc: "images2/ql11.jpg",
                              title: "Bo Bunny - Souvenir Collection - 12 x 12 Cardstock Stickers - Combo",
                              detail: "Includes one 12 x 12 sheet of cardstock stickers. Made in the USA."
                          },

                          {
                              imgSrc: "images2/ql12.jpg",
                              title: "Bo Bunny - Souvenir Collection - 6 x 6 Paper Pad",
                              detail: "Each  Collection Pack from BoBunny includes 18 double sided designer paper and one 12 x 12 sheet of cardstock stickers. Made.."
                          },
                             {
                                 imgSrc: "images2/ql13.jpg",
                                 title: "Bo Bunny - Souvenir Collection - 12 x 12 Collection Pack",
                                 detail: "Each 6 x 6 Paper Pad from Bo Bunny includes 36 single sided patterned papers. Made in the USA."
                             },
                              {
                                  imgSrc: "images2/dl1.jpg",
                                  title: "Bo Bunny - Souvenir Collection - 6 x 6 Paper Pad",
                                  detail: "Each  Collection Pack from BoBunny includes 18 double sided designer paper and one 12 x 12 sheet of cardstock stickers. Made.."

                              },


                      ]
                  };
                  var id = this.id;
                  alert(id);
                  var source = $("#template").html();
                  alert(source);
                  var template = Handlebars.compile(source);
                  alert(template);
                  var placeHolder = $("#resultDiv");
                  var html = template(data.deal[id]);
                  placeHolder.html(html);

              });
          });