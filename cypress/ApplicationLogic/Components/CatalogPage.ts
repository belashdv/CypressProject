export class CatalogPage {
    get FilterContainers () {
        return {
            FirstLine: cy.get('#filter_tbl'),
            SecondLine: cy.get('.filter_second_line_dv')
        };
    }

    get TableContainers () {
        return {
            Headline: cy.get('#head_line'),
        };
    }

    get DropDowns () {
        return {
            Ads: cy.get('#today_cnt_sl'),
            PriceMin: this.FilterContainers.FirstLine.get('#f_o_8_min'),
            PriceMax: this.FilterContainers.FirstLine.get('#f_o_8_max'),
            YearMin: this.FilterContainers.FirstLine.get('#f_o_18_min'),
            YearMax: this.FilterContainers.FirstLine.get('#f_o_18_max'),
            VolumeMin: this.FilterContainers.FirstLine.get('#f_o_15_min'),
            VolumeMax: this.FilterContainers.FirstLine.get('#f_o_15_max'),
            Engine: this.FilterContainers.FirstLine.get('#f_o_34'),
            Transmission: this.FilterContainers.FirstLine.get('#f_o_35'),
            CarBody: this.FilterContainers.FirstLine.get('#f_o_32'),
            Shows: this.FilterContainers.SecondLine.get('.filter_sel.w95'),
            District: this.FilterContainers.SecondLine.get('.filter_sel.w140 '),
            DealType: this.FilterContainers.SecondLine.get('.filter_sel.l100'),
            Model: this.FilterContainers.SecondLine.get('.filter_sel').last()
        };
    }

    get Buttons () {
        return {
            Search: this.FilterContainers.FirstLine.get('.b.s12'),
            FilterBy: this.TableContainers.Headline.get('.msg_column'),
        };
    }

    async FilterBy (text: string) {
        this.TableContainers.Headline.contains(`${text}`).click()
    }
}