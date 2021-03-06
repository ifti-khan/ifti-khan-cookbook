$(document).ready(function(){
    // This is for the copyright year located in the footer
    $("#copyright-jsyear").text(new Date().getFullYear());

    // Materialize initialization of sidenav, modal, input elements character count and text helper, 
    // textarea character count and text helper, form selection and collapsible elements
    $(".sidenav").sidenav({ edge: "right" });
    $('.modal').modal();
    $('input#fullname, input#email, input#username, input#password, input#recipe_name, input#recipe_description, input#recipe_image_url,\
    input#recipe_name, input#new_username, input#current_password, input#new_password, input#confirm_password, input#modal_name, \
    input#modal_username, input#modal_email, input#new_meal_name, input#new_cuisine_name, input#new_diet_name').characterCounter();
    $('select').formSelect();
    $('.collapsible').collapsible();

    // This block of code was provided by The Code Institute to help 
    // with the validation for the dropdown select options
    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "margin": "0 auto" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
});

