/* this is directly injected into the page */
/* eslint-env jquery */
/* global LZString */
/* global emailjs */

// functions
const ratingQuestion = [
  {
    id: 1,
    question: "Zusammenarbeit insgesamt",
  },
  {
    id: 2,
    question: "Qualität der Bewerberprofile",
  },
  {
    id: 3,
    question: "Erfolge im Verhältnis zum Honorar",
  },
  {
    id: 4,
    question: "Einhaltung des vorgegebenen Recruiting-Prozesses",
  },
  {
    id: 5,
    question: "Repräsentation des Unternehmens am Markt",
  },
];

// wait for element to be shown
function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

/**
 *
 * @param {*} initialRatingValues is an object with multiple {questionId: answer}
 * @param {*} disabled wether or not we
 * @returns
 */

// <!-- Rating --->
const createRatingElements = (initialRatingValues) => {
  let ratingElements = "";
  // create the rating elements
  for (let i = 0; i < ratingQuestion.length; i++) {
    const rating = ratingQuestion[i];

    const question = `<p class="rating-question">${rating.question}</p>`;
    let scale = "";
    for (let j = 1; j <= 5; j++) {
      let selectedCheck = "";
      // check if in the initial values for this ratingQuestion.id we selected this answer
      if (initialRatingValues) {
        selectedCheck =
          initialRatingValues[`${rating.id}`] >= j ? 'class="selected"' : "";
      }

      scale = `${scale}<button type="button" ${selectedCheck} data-answer=${j}></button>`;
    }
    ratingElements = `${ratingElements}<div class='rating-wrapper'>${question}<div class="rating-scale" data-question='${rating.id}'>${scale}</div></div>`;
  }
  return ratingElements;
};

/**
 * Function to extract a variable from the query string
 * @param query the query string
 * @param variable the variable we want to extract
 */

const getParameterByName = (query, variable) => {
  if (query) {
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }
};

/**
 *  Decompress the router query
 * @param query the query
 * @returns
 */

const getDecompressedRouterQuery = (query) => {
  // decompress
  const decompressedRouterQuery =
    LZString.decompressFromEncodedURIComponent(query);
  return decompressedRouterQuery;
};

window.addEventListener("load", async function (event) {
  const splittedPathname = new URL(document.URL).pathname.split("/");
  const splittedPathnameArrayPosition = splittedPathname.length - 1;
  const isLocalhost = new URL(document.URL).hostname === "localhost";

  const userContext = JSON.parse(
    document.getElementById("js-react-on-rails-context").innerHTML
  );

  // if this field is set, we are logged in
  const isUserLoggedIn = userContext.loggedInUsername !== null;

  function autoResizeTextAreas() {
    $("textarea").each(function (textarea) {
      $(this).height($(this)[0].scrollHeight);
    });
  }

  console.log("userContext", userContext);
  console.log("splittedPathname", splittedPathname);
  console.log("rating script initialized");

  /**
   * General
   */

  // if user is not logged in, make the logo to go to the homepage
  if (!isUserLoggedIn) {
    $(".Logo").attr({ href: "https://hirewood.com" });
  }
  $("#privacy_link").attr({
    href: "https://www.hirewood.com/hw/impressum",
    target: "_blank",
  });

  const isInfoPages =
    splittedPathname[splittedPathnameArrayPosition - 1] === "infos";

  if (!isInfoPages) {
    // add the sidebar if not in about
    $(".left-navi").css({ display: "inline-block" });
  }

  if (isUserLoggedIn) {
    // display the add new card button
    $(".AddNewListingButton").attr("style", "display: inline-block !important");

    // display jitsi button in navbar
    $("div[class*=Topbar__topbarMenuSpacer__]").after(
      '<a class="jitsi-button">Videocall</a>'
    );
    // open the modal on click
    $(".jitsi-button")
      .attr({ href: "#" })
      .attr({ target: "_blank" })
      .click(function (event) {
        event.preventDefault();
        $(".custom-modal.jitsi").css({ display: "block" });
      });

    // information button
    $("#home_toolbar-select-share-type").after(
      '<a class="search-information-button">Suchtipp</a>'
    );
    // open the modal on click
    $(".search-information-button")
      .attr({ href: "#" })
      .attr({ target: "_blank" })
      .click(function (event) {
        event.preventDefault();
        $(".custom-modal.search-information").css({ display: "block" });
      });
  }

  // pages

  // Sign-Up

  // remove the lightbox event listener
  $("#privacy_link").off("click");
  $("#privacy_link").attr({
    href: "https://www.hirewood.com/hw/impressum",
    target: "_blank",
  });
  $("#terms_link").off("click");
  $("#terms_link").attr({
    href: "https://www.hirewood.com/hw/agb",
    target: "_blank",
  });

  // check if homepage and redirect
  if (
    splittedPathname[0] === "" &&
    splittedPathname[1] === "" &&
    splittedPathname.length === 2 &&
    window.location.search[0] === undefined
  ) {
    // redirect
    this.window.location = "/login";
  }

  // index page when logged in
  let isIndexSearchPage = false;
  // default empty
  if (splittedPathname[0] === "" && splittedPathname[1] === "") {
    isIndexSearchPage = true;
  }
  // with (only) language in url means its the search
  if (splittedPathname[0] === "") {
    // second position is language
    if (splittedPathname[1] === "de" || splittedPathname[1] === "en") {
      if (splittedPathname[2] === "/" || splittedPathname[2] === undefined) {
        isIndexSearchPage = true;
      }
    }
  }

  // remove question mark from location if there is one
  var cleanedQuery =
    window.location.search.length && window.location.search[0] === "?"
      ? window.location.search.slice(1)
      : window.location.search;

  // check if we are on the main page with all the listings
  const hasCategoryQuery = getParameterByName(cleanedQuery, "category");
  const hasSearchQuery = getParameterByName(cleanedQuery, "q");

  if (isIndexSearchPage && isUserLoggedIn) {
    if (hasSearchQuery) {
      $(".home-categories-main:first-of-type").css({ display: "block" });
    } else if (!hasSearchQuery && !hasCategoryQuery) {
      this.window.location = "/?category=kandidat-in";
    }
  }

  // user feedback
  // load the script conditionally only if its not the user feedback page
  const isUserFeedbackPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "user_feedbacks" &&
    splittedPathname[splittedPathnameArrayPosition] === "new";

  if (!isUserFeedbackPage) {
    console.log("isUserFeedbackPage");
    // add hubspot if its not the user-feedback page
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = "//js.hs-scripts.com/9485849.js";
    head.appendChild(script);
  }

  // settings
  const isSettingsPage =
    splittedPathname[splittedPathnameArrayPosition] === "settings";
  if (isSettingsPage) {
    // change text of anzeigename
    $("#person_display_name")
      .prev("small")
      .text(
        "Der Anzeigename wird anderen Nutzern statt des Vor- und Nachnamens angezeigt."
      );
    $("#person_display_name").before($("<br/>"));
    $("#person_display_name").before(
      $(
        "<small><b>Unternehmen</b> tragen ihren Unternehmensnamen ein (z.B. XY GmbH). <b>Berater oder Startups</b> tragen den eigenen Vor- und Nachnamen mit Unternehmensnamen ein (Vor- Nachname | XY GmbH). <b>Kandidat:innen</b> tragen ihre Position ein (z.B Cloud Architect, Sales Manager, CIO). So bleibt ihr Kandidatenprofil anonym.</small>"
      )
    );
    // remove anzeigename
    // $("#person_display_name").prev("small").remove();
    // $("#person_display_name")
    //   .prevAll(".inline-label-container")
    //   .first()
    //   .remove();
    // $("#person_display_name").prev(".alert-box-icon").remove();
    // $("#person_display_name").remove();

    // add the links
    $("#person_description").before($("<br/>"));
    $("#person_description").before(
      $(
        "<a href='https://hirewood.notion.site/Mustervorlage-f-r-Personalberater-innen-384cb6dafbfc47229f176215e6fa53e7' target='_blank' class='profile-link'><small>Mustervorlage für Recruiter:innen</small></a>"
      )
    );
    $("#person_description").before($("<br/>"));
    $("#person_description").before(
      $(
        "<a href='https://hirewood.notion.site/Mustervorlage-f-r-Unternehmen-1416adfdd2194af6812e8e6fcaed347a' target='_blank' class='profile-link'><small>Mustervorlage für Unternehmen</small></a>"
      )
    );
    $("#person_description").before($("<br/>"));
    $("#person_description").before(
      $(
        "<a href='https://hirewood.notion.site/Mustervorlage-f-r-Kandidat-innen-ae32cbf2293f450ea5539b78aedbb239' target='_blank' class='profile-link'><small>Mustervorlage für Kandidat:innen</small></a>"
      )
    );

    // add the placeholder
    $("#person_description").css({ height: "300px", resize: "auto" });
    $("#person_description").prop(
      "placeholder",
      "Mit Ihrem Profil stehen Sie im Mittelpunkt. Skizzieren Sie Ihre Schwerpunkte, Services oder Wünsche. Eine Mustervorlage finden Sie in den Links über diesem Textfeld.\n\nFür Unternehmen:\n                               Empfehlung:   „Über uns” Text der Unternehmenshomepage einfügen. Ihr Profil wird nicht veröffentlicht. Ihre Informationen werden nur für von Ihnen kontaktierte Recruiter sichtbar."
    );

    // image upload
    $("#avatar_file").before($("<br/>"));
    $("#avatar_file").before(
      $(
        "<small>Als Berater, Startup oder Kandidat laden Sie ein Portraitfoto hoch.</small>"
      )
    );
    $("#avatar_file").before($("<br/>"));
    $("#avatar_file").before(
      $(
        "<small>Als Unternehmen können Sie hier Ihr Unternehmens Logo einfügen.</small>"
      )
    );
    $("#avatar_file").before($("<br/>"));
  }

  // listing page, display rating if
  const isListingsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "listings";

  if (isListingsPage) {
    console.log("isListingsPage");

    // check if this is a create new listing page
    const isCreateListingsPage =
      splittedPathname[splittedPathnameArrayPosition] === "new";

    // in the listings page, remove the hidden elements that are not
    $(".checkbox-option.not-selected").remove();
    $(".col-4")
      .filter(function (index) {
        return $(this).children().length < 1;
      })
      .remove();

    if (isCreateListingsPage) {
      console.log("isCreateListingPage");

      function displayCreatingListingElements() {
        $("#listing_title").prop(
          "placeholder",
          "z.B. Ihr Name/ Startup oder als Kandidat:in den Jobtitel"
        );
        $("#listing_description").prop(
          "placeholder",
          "z.B. Informationen zu Ihrer Person, zum Startup oder als Kandidat:in Ihre Kenntnisse und Erfahrung. Die Angaben sind wichtig für die Schlagwortsuche für andere Nutzer."
        );
        // meine kernpositionen
        $("#custom_fields_168716").prop(
          "placeholder",
          "z.B. Head of SAP Application, SAP S/4Hana, SAP Consultant (PP, SD, FI CO, MM, WM), Cloud Architect"
        );
        // meine referenzen
        $("#custom_fields_169340").prop(
          "placeholder",
          "z.B. SAP Solution Manager, SAP Key User, SAP PP Consultant bei Globaler Chemie & Pharma Konzern"
        );
        // Mein Beraterhonorar in Prozent auf das OTE*
        $("#custom_fields_165417").prop(
          "placeholder",
          "z.B. 25% bis 65.000€ OTE, 30% ab 65.000€ OTE"
        );
        // Mindestberaterhonorar
        $("#custom_fields_169342").prop("placeholder", "z.B. 15.000€");

        $('label[for="listing_image"]')
          .next(".info-text-container")
          .children(".info-text-content")
          .append(
            "Als erstes Bild sollten Sie immer ein Business Portraitfoto von Ihnen als Person einstellen. Als weitere Bilder können Sie z.B. Ihr Firmenlogo oder Themenbilder hochladen (optional)."
          );
      }

      // function watchForElement() {
      //   displayCreatingListingElements();
      //   waitForElm("#listing_title").then((elm) => {
      //     watchForElement();
      //   });
      // }
      // wait for the elem to appear
      waitForElm("#listing_title").then((elm) => {
        displayCreatingListingElements();
      });
    }

    // check if we have a query
    const query = window.location.search.substr(1);
    const decompressedRouterQuery = getDecompressedRouterQuery(query);

    if (decompressedRouterQuery !== null) {
      const lid = getParameterByName(decompressedRouterQuery, "lid");
      const uid = getParameterByName(decompressedRouterQuery, "uid");

      // check if the user and the listingid is right
      if (
        lid === splittedPathname[splittedPathnameArrayPosition] &&
        uid === userContext.loggedInUsername
      ) {
        // make the form visible
        $("#comment-form").css({
          display: "block",
        });
        // scroll to the comment form
        document
          .getElementById("comment-form")
          .scrollIntoView({ behavior: "smooth" });

        // append rating elements to the comment box
        $(".listing_comment_content_text_area")
          .first()
          .after(createRatingElements());

        // add the event listener to the rating buttons
        const ratingData = {};
        $(".rating-wrapper button").click(function () {
          const clickedRatingButton = this;

          const question = $(clickedRatingButton).parent().data("question"); // gets the question id
          const answer = $(clickedRatingButton).data("answer"); // gets the actual selected answer

          ratingData[`${question}`] = answer;

          // remove all selected
          $(clickedRatingButton).siblings().removeClass("selected");
          // make self and all siblings selected that are smaller
          $(clickedRatingButton).addClass("selected");
          $(clickedRatingButton)
            .siblings()
            .each(function () {
              const fillUpStarRating = parseInt($(this).data("answer"), 10);
              console.log("fillUpStarRating, answer", fillUpStarRating, answer);
              if (fillUpStarRating <= answer) {
                $(this).addClass("selected");
              }
            });

          // push the data into the comment box
          $(".listing_comment_content_text_area")
            .first()
            .val(JSON.stringify(ratingData));
        });

        // add event listener to submit button
        $("#send_comment_button").click(function () {
          // make the form invvisible
          $("#comment-form").css({
            display: "none",
          });

          // now redirect to the page
          window.location.replace(
            window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname
          );
        });
      }
    }
  }

  // messages page
  const isMessagesTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";

  if (isMessagesTransactionsPage) {
    const messageContentBox = $("#message_content");
    // track if we need to attach the message
    // and send it via mail
    let attachMessage = false;
    $('button[name="button"]').click(function (event) {
      console.log("attachMessage", attachMessage);
      if (attachMessage === true) {
        emailjs.send("service_6kq6oze", "template_6ed6agl", {
          userId: userContext.loggedInUsername,
          message: messageContentBox.val().replace(/\n/g, "<br />"),
        });
      }
    });

    // create the top buttons
    $("#reply_form").before(
      $(
        "<p class='message-avatar-padding'>Per Klick erzeugen wir einen Platzhaltertext der angepasst werden kann.</p>"
      )
    );

    $("#reply_form").before(
      $("<div></div>")
        .addClass("message-avatar-padding")
        .addClass("message-selection")
    );
    $(".message-selection")
      .append(
        $("<div></div>")
          .addClass("message-selection-column")
          .append(
            $("<a>Kooperation<br/>Skizze</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                attachMessage = true;
                messageContentBox.val(
                  "Skizzierte Kooperation\n\nID: (Projektnummer, wenn vorhanden)\nProjektziel:\nZeitraum: X - X \nFinanzielle Volumen: \nAnzahlung: X € / Erfolgsbasiert\nErgänzende Vereinbarung:\n\nViele Grüße"
                );
                autoResizeTextAreas();
              })
          )
          .append(
            $("<a>Notizen<br/>Meeting</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                attachMessage = true;
                messageContentBox.val(
                  "Goals: \n\nTopics: \n\nAction:\n\n\nViele Grüße\n"
                );
                autoResizeTextAreas();
              })
          )
          .append(
            $("<a>Neue<br/>Absprache</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                attachMessage = true;
                messageContentBox.val(
                  "Absprache zwischen: \nInhaltliche Änderung: \n(Optional: Projektnummer)\n\nBegründung:\n\n\nViele Grüße"
                );
                autoResizeTextAreas();
              })
          )
      )

      .append(
        $("<div></div>")
          .addClass("message-selection-column")
          .append(
            $("<a>Vakanz<br/>besetzt</a>")
              .attr({ href: "#" })
              .addClass("message-button-link")
              .click(function (event) {
                event.preventDefault();
                attachMessage = true;
                messageContentBox.val(
                  "HERZLICHEN GLÜCKWUNSCH!\n\nHiermit bestätigen wir den erfolgreichen Projektabschluss über hirewood.\n\n(Optional: Ihre interne Projektnummer)\nVakanz:\nZielgehalt lt. Arbeitsvertrag: X €\n\nWir freuen uns über die erfolgreiche Zusammenarbeit und bitten Sie um Rechnungserstellung. Bitte senden Sie die Rechnung an XXX.\n\nVielen Dank für die erfolgreiche Zusammenarbeit!\n"
                );
                autoResizeTextAreas();
              })
          )
          .append(
            $("<a>Datentransfer<br/>starten</a>")
              .attr({ href: "https://app.novospace.com/#/login" })
              .attr({ target: "_blank" })
              .addClass("message-button-link")
          )
      );
    // create the videocall button
    $('button[name="button"]').wrap(
      '<div class="message-form-submit-wrapper"></div>'
    );
    $(".message-form-submit-wrapper").append(
      $("<a>Videocall</a>")
        .attr({ href: "#" })
        .attr({ target: "_blank" })
        .addClass("message-button-link")
        .click(function (event) {
          event.preventDefault();
          $(".custom-modal.jitsi").css({ display: "block" });
        })
    );
    console.log("messages page");
  }

  // modal stuff
  // When the user clicks on <span> (x), close the modal
  $(".custom-modal-close").click(function (event) {
    $(".custom-modal").css({ display: "none" });
  });
  // When the user clicks anywhere outside of the modals, close them
  var modal = document.getElementsByClassName("custom-modal");
  window.onclick = function (event) {
    // Get any modal
    if (event.target === modal[0] || event.target === modal[1]) {
      $(".custom-modal").css({ display: "none" });
    }
  };

  // rename in the Settings the Transaktionen to Add-Ons
  $("#settings-tab-transactions .left-navi-link-text").text("Add-Ons");

  // settings transaction page
  const isSettingsTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition] === "transactions";

  if (isSettingsTransactionsPage) {
    console.log("isSettingsTransactionsPage");

    // rename in the hero
    const transactionHeroSplit = $("h1").text().split("-");
    $("h1").text(transactionHeroSplit[0] + " - " + "Add-Ons");

    // remove old elements
    $(".left-navi-section form").remove();
    $("h2").text("Add-Ons");

    // $("#admin_transactions_count").remove();
    // $("#admin_transactions").remove();

    const payactiveEndpointData = await fetch(
      "https://apps.hirewood.com/api/payactive"
    ).then(async (response) => await response.json());

    console.log("endpointData", payactiveEndpointData);

    //admin_transactions
    // novospace
    $(".left-navi-section h2").after(
      `<div class="transaction-button-wrapper"><div class="transaction-button"><a class="transaction-button-link" href="https://www.novospace.com/" target="_blank">novospace</a></div><div class="transaction-explainer"><h5>Datenshare</h5>Über unseren Partner Novospace können Sie Daten wie Kandidaten-Profile mit Ihren Auftraggebern teilen. Dazu erstellen Sie per Klick einen Space je Auftraggeber. Alles DSGVO konform, mit verschlüsselten Daten und Servern in Deutschland. So haben beide Parteien alle betreffenden Kandidaten in einem Space. Registrieren Sie sich dazu kostenlos, kurz und knackig bei unserem Partner. Öffnen Sie den Space bequem im hirewood Chat und besprechen Sie Kandidaten im hirewood Video Call.</div></div>`
    );
    // refapp
    $(".left-navi-section h2").after(
      `<div class="transaction-button-wrapper"><div class="transaction-button"><a class="transaction-button-link" href="https://www.refapp.se/?lang=en&a=b/" target="_blank">refapp</a></div><div class="transaction-explainer"><h5>Referenzen</h5>Refapp, holen Sie sich spielend digitale Referenzen zu Ihren Kandidaten ein. Wir freuen uns zusammen mit Refapp eine kostenfreie Testphase von zwei Monaten und einen Neukundenrabatt für die erste Vertragslaufzeit anbieten zu können. <a href="https://hirewood.medium.com/bestehende-referenzen-als-personalberater-in-hirewood-%C3%BCbertragen-931593739a04" target="_blank">Zum Refapp Blogbeitrag</a> <a href="#" target="_blank">Zum Angebot</a></div></div>`
    );
    // aifinyo
    $(".left-navi-section h2").after(
      `<div class="transaction-button-wrapper"><div class="transaction-button"><a class="transaction-button-link" href="https://www.aifinyo.de/?source=hirewood" target="_blank">aifinyo</a></div><div class="transaction-explainer"><h5>Factoring</h5>Mit unserem Payment-Partner für Factoring bieten wir Personalberater:innen den digitalen Boost für mehr Liquidität an. Berater:innen bieten wir die Möglichkeit einer Honorar-Auszahlung innerhalb von 48 Stunden. Gleichzeitig genießen Unternehmen eine Zahlungsflexibilität von bis zu 90 Tagen.</div></div>`
    );
    // payactive
    $(".left-navi-section h2").after(
      `<div class="transaction-button-wrapper"><div class="transaction-button"><a class="transaction-button-link" href="${payactiveEndpointData.invitationUrl}" target="_blank">payactive</a></div><div class="transaction-explainer"><h5>E-Rechnungen</h5>Berater:innen bieten wir die Möglichkeit Rechnungen digital an Ihren Auftraggeber zu senden. Dazu können Berater:innen wie gewohnt ihre Rechnungen erstellen und auf payactive hochladen. Sobald die Rechnung versendet ist, werden die Berater:innen über den aktuellen Stand informiert.</div></div>`
    );
    // description
    $(".left-navi-section h2").after(
      `<p>Über folgende Links gelangen Sie zu unseren Kooperationspartnern, wo Sie sich in wenigen Schritten registrieren können.</p><p style="margin-bottom: 45px">Außerdem finden Sie hier weitere Informationen zum Payment über unsere Partner <a href="https://hirewood.medium.com/e-rechnung-und-factoring-im-recruitment-519d0b3cd8f2" target="_blank" style="text-decoration: underline">HIER</a></p>`
    );
  }

  // is create a new transaction page
  const isNewTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";

  const isGeneralTransactionsPage =
    splittedPathname[splittedPathnameArrayPosition] === "new";

  if (isGeneralTransactionsPage && isNewTransactionsPage) {
    $("#message").val(
      "Hallo,\ngerne möchten wir Sie im - Chat oder per Videocall - kennenlernen und mit Ihnen folgende Punkte besprechen:\n\n1. Vorstellungsrunde\n2. Unsere aktuelle offene Vakanz\n3. Absprache der Konditionen\n4. (...)\n\nFolgende Terminvorschläge bieten wir Ihnen gerne an:\nTag, Datum um x Uhr\nTag, Datum um x Uhr\nWir freuen uns auf ein erstes Kennenlernen und würden Ihnen - nach einer erfolgreicher Absprache- gerne den Auftrag über hirewood erteilen."
    );
    autoResizeTextAreas();
  }

  // contact page
  // if we find the contact-wrapper, it means we are on the homepage
  // const elemContact = document.getElementsByClassName("new-feedback-form");
  // if (elemContact.length) {
  //   // remove the page content
  //   const pageContent = document.getElementsByClassName("page-content");
  //   pageContent[0].parentNode.removeChild(pageContent[0]);

  //   // remove the title
  //   $(".title-container").remove();
  //   // add the contact
  //   const contactForm =
  //     '<iframe class="embedded-contact" id="embedded-contactform" width="100%" height="100%" src="https://recscout.hubspotpagebuilder.com/recscout-pr%C3%A4sentation" frameborder="0" style="height:100vh"></iframe>';
  //   $(".marketplace-lander").append(contactForm);

  //   // remove the second hubspot element
  //   // $("#hubspot-messages-iframe-container").attr(
  //   //   "style",
  //   //   "display: none !important"
  //   // );

  //   waitForElm("#hubspot-messages-iframe-container").then((elm) => {
  //     $(elem).addClass("display-none");
  //   });
  // }

  // WE PROBABLY DONT NEED THIS ANYMORE
  // Auto accept Rating Page
  // const isAutoAcceptRatingPage =
  //   splittedPathname[splittedPathnameArrayPosition - 1] === "transactions";
  // if (isAutoAcceptRatingPage) {
  //   console.log("autoaccept, redirecting");
  //   // automatically accept
  //   $("a.accept")[0].click();
  // }

  // display rating
  const isReadRatingPage = $("#comment-list").length > 0;
  if (isReadRatingPage) {
    $(".comment-content").each(function () {
      const initialRatingValues = JSON.parse($(this).text());
      $(this).after(createRatingElements(initialRatingValues));
    });
  }
  // remove the names from the ratings
  $(".comment h3 a").text("Anonym").attr({ href: "#" });
  // now display
  $(".comment h3 a").css({ display: "inline-block" });

  // <!-- Homepage -->
  console.log("homepage script initialized");

  // fucntions
  // const injectReact = () => {
  //   // inject react
  //   const reactScript = document.createElement("script");
  //   reactScript.type = "text/javascript";
  //   reactScript.src =
  //     "https://hirewood.github.io/hirewood-homepage/public/main.js";
  //   $("head").append(reactScript);
  // };

  // if we find the customization-wraper, it means we are on the homepage
  const elem = document.getElementsByClassName(
    "community-customization-wrapper"
  );
  if (elem.length) {
    // now remove the cover image
    const coverImage = document.getElementsByClassName("coverimage");
    coverImage[0].parentNode.removeChild(coverImage[0]);
    // remove the page content
    const pageContent = document.getElementsByClassName("page-content");
    pageContent[0].parentNode.removeChild(pageContent[0]);
    // change the classname so we dont get overrides
    document
      .getElementsByClassName("marketplace-lander")[0]
      .classList.add("root-entry");
    document
      .getElementsByClassName("root-entry")[0]
      .classList.remove("marketplace-lander");
    // add the animation classes
    document.body.classList.add("is-loaded");
    document.body.classList.add("has-animations");

    // add our entry
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.getElementsByClassName("root-entry")[0].appendChild(root);

    // // inject react
    // injectReact();
  }
});
