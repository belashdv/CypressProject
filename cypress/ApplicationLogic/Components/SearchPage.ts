export class SearchPage {
    get Containers () {
        return {
            MainContainer: cy.get('.page_div_main'),
        }
    }

    get Fields () {
        return {
            Model: this.Containers.MainContainer.get('select.in1s[name="cid[]"]'),
            minYear: this.Containers.MainContainer.get('select.in3[name="topt[18][min]"'),
            maxYear: this.Containers.MainContainer.get('select.in3[name="topt[18][max]"'),
            minVolume: this.Containers.MainContainer.get('input.in3[name="topt[15][min]"'),
            maxVolume: this.Containers.MainContainer.get('input.in3[name="topt[15][max]"'),
            Engine: this.Containers.MainContainer.get('select.in1s[name="opt[34][]"'),
            Transmission: this.Containers.MainContainer.get('select.in1s[name="opt[35][]"'),
            CarBody: this.Containers.MainContainer.get('select.in1s[name="opt[32][]"'),
            DealType: this.Containers.MainContainer.get('select.in1s[name="sid"]'),
            SortBy: this.Containers.MainContainer.get('select.in1s[name="sort"]'),
        }
    }

    async pressSearch () {
        this.Containers.MainContainer.get('#sbtn').click();
    }

    async setYears (a: number, b:number) {
        this.Containers.MainContainer.get('select.in3[name="topt[18][min]"').select(`${a}`)
        this.Containers.MainContainer.get('select.in3[name="topt[18][max]"').select(`${b}`)
    }

    async setVolumes (a: number, b:number) {
        this.Containers.MainContainer.get('input.in3[name="topt[15][min]"').type(`${a}`)
        this.Containers.MainContainer.get('input.in3[name="topt[15][max]"').type(`${b}`)
    }
}
