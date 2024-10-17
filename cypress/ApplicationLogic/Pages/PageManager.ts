import { BasePage} from "./BasePage";
import { HomePage } from "./HomePage";
import { Header } from "../Components/Header";
import { CatalogPage } from "../Components/CatalogPage";
import { SearchPage } from "../Components/SearchPage";

class PageManager {
    basePage: BasePage;
    homePage: HomePage;
    catalogPage: CatalogPage;
    searchPage: SearchPage;
    header: Header;

    constructor() {
        this.basePage = new BasePage();
        this.homePage = new HomePage();
        this.catalogPage = new CatalogPage();
        this.searchPage = new SearchPage();
        this.header = new Header();
    };
};

export const pageManager = new PageManager();