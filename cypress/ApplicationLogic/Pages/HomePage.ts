import { BasePage } from "./BasePage";

export class HomePage {
    get Containers () {
        return {
            MainContainer: cy.get('#page_main_full'),
        };
    }

    async choosePage(param: string) {
        cy.contains(`${param}`).click()
    }
}