import {baseURL, Heading, Transport, Brand, TopButtons} from '../enums/Data'
import {EngineType, TransmissionType, BodyType, CarDealType, CarSortBy} from '../enums/Data'
import { pageManager } from '../ApplicationLogic/Pages/PageManager'
import { contains } from 'cypress/types/jquery'




describe('Test to check availability of specific brand and model of auto', () => {
  it('passed', () => {

    cy.visit(baseURL.Url)
    //Change language to Russian
    pageManager.header.changeLanguage()
    cy.url().should('include', '/ru/')
    //Choose Transport
    pageManager.homePage.choosePage(Heading.Transport)
    //Choose Cars
    pageManager.homePage.choosePage(Transport.Cars)
    //Choose Pegeout brand
    pageManager.homePage.choosePage(Brand.Peugeot)
    //Open Search
    pageManager.header.pressButton(TopButtons.Search)
    //Set filter to Years: 2011-2014 , Volume: 2.0-2.2, Engine: Diesel, 
    //Transmission: Automatic, CarBody: Sedan, Deal type: Sell, Model: 508, Sort by Price
    //pageManager.catalogPage.DropDowns.YearMin.trigger('mousedown')
    pageManager.searchPage.Fields.Model.select('508') 
    pageManager.searchPage.setYears(2011, 2014)
    pageManager.searchPage.setVolumes(2, 2.2)
    pageManager.searchPage.Fields.Engine.select(EngineType.Diesel)   
    pageManager.searchPage.Fields.Transmission.select(TransmissionType.Automatic)
    pageManager.searchPage.Fields.CarBody.select(BodyType.Sedan)  
    pageManager.searchPage.Fields.DealType.select(CarDealType.Selling)
    pageManager.searchPage.Fields.SortBy.select(CarSortBy.Price)
    //Press Search
    pageManager.searchPage.pressSearch()
  })
  
  
})