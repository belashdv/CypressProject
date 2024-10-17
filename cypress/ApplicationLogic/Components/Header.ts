export class Header {
    get Containers () {
        return {
            TopContainer: cy.get('#main_table'),
        };
    }
    get Buttons () {
        return {
            // AddAD: ,
            // MyADs: ,
            TopButtons: this.Containers.TopContainer.get('.a_menu'),
            // Bookmarks: ,
            Language: this.Containers.TopContainer.get('.menu_lang'),
        }
    }

    async changeLanguage() {
        this.Buttons.Language.click();
    }

    async pressButton(param: string) {
        this.Buttons.TopButtons.contains(`${param}`).click()
    }
}