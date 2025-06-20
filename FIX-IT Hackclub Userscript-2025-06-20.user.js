// ==UserScript==
// @name         FIX-IT Hackclub Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-06-20
// @description  A useful userscript that declutters the Roblox homepage
// @author       Hannes
// @match        https://www.roblox.com/home
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Remove the "Today's Picks" section
    const TodaySPicksObserver = new MutationObserver(() => {
        const todaysPicks = document.querySelector('div.game-sort-carousel-wrapper:nth-child(2)');
        if (todaysPicks) {
            todaysPicks.remove();
            TodaySPicksObserver.disconnect();
        }
    });
    TodaySPicksObserver.observe(document.body, { childList: true, subtree: true });

    // Remove the "Sponsored" section
    const SponsoredObserver = new MutationObserver(() => {
        const sponsoredSection = document.querySelector('.css-koapdt-collectionCarouselContainer');
        if (sponsoredSection) {
            sponsoredSection.remove();
            SponsoredObserver.disconnect();
        }
    });
    SponsoredObserver.observe(document.body, { childList: true, subtree: true });

    // Remove the first "Recommended for You" section
    // You only need one "Reccommended for You" section.
    const RecommendedObserver = new MutationObserver(() => {
        const recommendedSection = document.querySelector('.game-home-page-container > div:nth-child(1) > div:nth-child(3)');
        if (recommendedSection) {
            recommendedSection.remove();
            RecommendedObserver.disconnect();
        }
    });
    RecommendedObserver.observe(document.body, { childList: true, subtree: true });

    // Moving the "Favorites" section to the top, right after the "Continue" section
    const FavoritesObserver = new MutationObserver(() => {
        const favoritesSection = document.querySelector('div.game-sort-carousel-wrapper:nth-child(5)');
        const continueSection = document.querySelector('div.game-sort-carousel-wrapper:nth-child(2)');
        if (favoritesSection && continueSection) {
            continueSection.insertAdjacentElement('afterend', favoritesSection);
            FavoritesObserver.disconnect();
        }
    });
    FavoritesObserver.observe(document.body, { childList: true, subtree: true });

    // Remove empty space after the now moved "Favorites" section
    const EmptySpaceObserver = new MutationObserver(() => {
        const emptySpace = document.querySelector('.sdui-feed-item-container');
        if (emptySpace) {
            emptySpace.remove();
            EmptySpaceObserver.disconnect();
        }
    });
    EmptySpaceObserver.observe(document.body, { childList: true, subtree: true });
})();