export class CatalogPage {
    get FilterContainers () {
        return {
            FirstLine: cy.get('#filter_tbl'),
            SecondLine: cy.get('.filter_second_line_dv')
        };
    }

    get TabelContainers () {
        return {
            Headline: cy.get('#head_line'),
        };
    }

    get DropDowns () {
        return {
            Ads: cy.get('#today_cnt_sl'),
            PriceMin: cy.get('#f_o_8_min'),
            PriceMax: cy.get('#f_o_8_max'),
            YearMin: cy.get('#f_o_18_min'),
            YearMax: cy.get('#f_o_18_max'),
            VolumeMin: cy.get('#f_o_15_min'),
            VolumeMax: cy.get('#f_o_15_max'),
            Engine: cy.get('#f_o_34'),
            Transmission: cy.get('#f_o_35'),
            CarBody: cy.get('#f_o_32'),
            Shows: cy.get('.filter_sel.w95'),
            District: cy.get('.filter_sel.w140 '),
            DealType: cy.get('.filter_sel.l100'),
            Model: cy.get('.filter_sel').last()
        };
    }

    get Buttons () {
        return {
            Search: this.FilterContainers.FirstLine.get('.b.s12'),
            FilterBy: this.TabelContainers.Headline.get('.msg_column'),
        };
    }

    async FilterBy (text: string) {
        this.TabelContainers.Headline.contains(`${text}`).click()
    }
}