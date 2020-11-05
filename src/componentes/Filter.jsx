import React from "react";
import moment from "moment";
import 'moment/locale/es';
import { hotelsData } from "./data";
import Hotels from "./Hotels";
import "../styles/styles.css";

export default class Filter extends React.Component {
  state = {
    fechaInicial: this.props.fechaInicial,
    fechaFinal: this.props.fechaFinal,
    hotels: hotelsData,
    hotelsFilter: []
  };

  handleFechaInicialChange = (e) => {
    this.setState({ fechaInicial: e.target.value });
  };
  handleFechaFinalChange = (e) => {
    this.setState({ fechaFinal: e.target.value });
  };

  filterSizes = (selectedSizes) => {
    if (selectedSizes === "Hotel pequeno") {
      this.setState({
        hotels: this.state.hotelsFilter.filter((sizes) => sizes.rooms <= 10)
      });
    }
    if (selectedSizes === "Hotel mediano") {
      this.setState({
        hotels: this.state.hotelsFilter.filter(
          (sizes) => sizes.rooms > 10 && sizes.rooms <= 20
        )
      });
    }
    if (selectedSizes === "Hotel grande") {
      this.setState({
        hotels: this.state.hotelsFilter.filter((sizes) => sizes.rooms > 20)
      });
    }
    console.log("");
    console.log("------------ Filtro- zises-------------");
  };

  handleFilters = () => {
    var comboCountry = document.getElementById("country");
    var selectedCountry = comboCountry.options[comboCountry.selectedIndex].text;
    var comboPrices = document.getElementById("prices");
    var selectedPrices = comboPrices.options[comboPrices.selectedIndex].text;
    var comboSizes = document.getElementById("sizes");
    var selectedSizes = comboSizes.options[comboSizes.selectedIndex].text;
    console.log(selectedCountry);
    console.log(selectedPrices);
    console.log(selectedSizes);
    /*Primera Condicion */
    if (
      selectedCountry === "Todos los Paises" &&
      selectedPrices === "Cualquier Precio" &&
      selectedSizes === "Cualquier Tamano"
    ) {
      this.setState({
        hotels: hotelsData
      });
      console.log("------Primera Condicion-------");
    }
    /*Segunda Condicion */
    if (
      selectedCountry === "Todos los Paises" &&
      selectedPrices === "Cualquier Precio" &&
      selectedSizes !== "Cualquier Tamano"
    ) {
      setTimeout(() => {
        this.setState({
          hotelsFilter: hotelsData
        });
        console.log("------Segunda Condicion-------");

        this.filterSizes(selectedSizes);
      }, 500);
    }
    /*Tercera Condicion*/
    if (
      selectedCountry === "Todos los Paises" &&
      selectedPrices !== "Cualquier Precio" &&
      selectedSizes === "Cualquier Tamano"
    ) {
      this.setState({
        hotels: hotelsData.filter((filter) => filter.price === selectedPrices)
      });
      console.log("------Tercera Condicion-------");
    }
    /*Cuarta Condicion*/
    if (
      selectedCountry === "Todos los Paises" &&
      selectedPrices !== "Cualquier Precio" &&
      selectedSizes !== "Cualquier Tamano"
    ) {
      setTimeout(() => {
        this.setState({
          hotelsFilter: hotelsData.filter(
            (filter) => filter.price === selectedPrices
          )
        });
        console.log("------Cuarta Condicion-------");

        this.filterSizes(selectedSizes);
      }, 500);
    }
    /*Quinta Condicion*/
    if (
      selectedCountry !== "Todos los Paises" &&
      selectedPrices === "Cualquier Precio" &&
      selectedSizes === "Cualquier Tamano"
    ) {
      this.setState({
        hotels: hotelsData.filter(
          (filter) => filter.country === selectedCountry
        )
      });
      console.log("------Quinta Condicion-------");
    }
    /*Sexta Condicion*/
    if (
      selectedCountry !== "Todos los Paises" &&
      selectedPrices === "Cualquier Precio" &&
      selectedSizes !== "Cualquier Tamano"
    ) {
      setTimeout(() => {
        this.setState({
          hotelsFilter: hotelsData.filter(
            (filter) => filter.country === selectedCountry
          )
        });
        console.log("------Sexta Condicion-------");

        this.filterSizes(selectedSizes);
      }, 500);
    }
    /*Septima Condicion*/
    if (
      selectedCountry !== "Todos los Paises" &&
      selectedPrices !== "Cualquier Precio" &&
      selectedSizes === "Cualquier Tamano"
    ) {
      this.setState({
        hotels: hotelsData.filter(
          (filter) =>
            filter.country === selectedCountry &&
            filter.price === selectedPrices
        )
      });
      console.log("------Septima Condicion-------");
    }
    /*Octava Condicion*/
    if (
      selectedCountry !== "Todos los Paises" &&
      selectedPrices !== "Cualquier Precio" &&
      selectedSizes !== "Cualquier Tamano"
    ) {
      setTimeout(() => {
        this.setState({
          hotelsFilter: hotelsData.filter(
            (filter) =>
              filter.country === selectedCountry &&
              filter.price === selectedPrices
          )
        });
        console.log("------Octava Condicion-------");

        this.filterSizes(selectedSizes);
      }, 500);
    }
  };

  render() {
    moment.locales("es");

    var dateTime1 = moment(this.state.fechaInicial);
    // formato de fecha
    var full1 = dateTime1.format("dddd D, MMMM YYYY");
   
    
    var dateTime2 = moment(this.state.fechaFinal);
    // formato de fecha
    var full2 = dateTime2.format("dddd D, MMMM YYYY");
   

    const hotelsOrder = this.state.hotels.sort((a, b) => a.rooms - b.rooms);
    const hotelsFilterFecha = hotelsOrder.filter(filter => filter.availabilityFrom >= dateTime1 && filter.availabilityTo <= dateTime2);
    const hotels = hotelsFilterFecha.map((hotels) => (
      <Hotels
        slug={hotels.slug}
        key={hotels.slug}
        photo={hotels.photo}
        name={hotels.name}
        description={hotels.description}
        city={hotels.city}
        country={hotels.country}
        rooms={hotels.rooms}
        price={hotels.price}
      />
    ));
    return (
      <React.Fragment>
        <div className="header_container">
          <header className="header">
            <section className="header_logo">
              <img
                className="logo_image"
                src={this.props.logo}
                alt={this.props.logo}
              />
            </section>
            <section className="filters_header">
              <form className="container_countries">
                <div>
                  <label name="country" />
                  <select
                    className="select_country"
                    id="country"
                    name="country"
                    defaultValue="Todos los Paises"
                    onChange={this.handleFilters}
                  >
                    <option>Todos los Paises</option>
                    <option>Argentina</option>
                    <option>Brasil</option>
                    <option>Chile</option>
                    <option>Uruguay</option>
                  </select>
                </div>
              </form>

              <form className="container_prices">
                <div>
                  <label name="prices" />
                  <select
                    className="select_prices"
                    id="prices"
                    name="prices"
                    defaultValue="Cualquier Precio"
                    onChange={this.handleFilters}
                  >
                    <option>Cualquier Precio</option>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                    <option>$$$$</option>
                  </select>
                </div>
              </form>

              <form className="container_sizes">
                <div>
                  <label name="sizes" />
                  <select
                    className="select_sizes"
                    id="sizes"
                    name="sizes"
                    defaultValue="Cualquier Tamano"
                    onChange={this.handleFilters}
                  >
                    <option>Cualquier Tamano</option>
                    <option>Hotel pequeno</option>
                    <option>Hotel mediano</option>
                    <option>Hotel grande</option>
                  </select>
                </div>
              </form>
            </section>
          </header>

          <section className="filters_fecha">
            <div className="filter_description_main">
              <h3>Tus</h3>
              <h2>
                Vacaciones <strong>ideales</strong>
              </h2>
            </div>

            <div className="filter_fecha">
              <form className="fecha_inicial">
                <h3>Ida</h3>
                <div className="container-fechaIn">
                  <label name="bday" />
                  <input
                    className="fechaIn"
                    type="date"
                    id="bday"
                    name="bday"
                    value={this.state.fechaInicial}
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    onChange={this.handleFechaInicialChange}
                  />
                  <span className="validity" />
                </div>
              </form>

              <form className="fecha_final">
                <h3>Vuelta</h3>
                <div className="container-fechaOut">
                  <label name="bday" />
                  <input
                    className="fechaOut"
                    type="date"
                    id="bday"
                    name="bday"
                    value={this.state.fechaFinal}
                    required
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    onChange={this.handleFechaFinalChange}
                  />
                  <span className="validity" />
                </div>
              </form>
            </div>
          </section>
          <div className="filter_description">
            <p>
              <small>Desde el </small>
              <strong>{full1}</strong>,<small> hasta el </small>
              <strong>{full2}</strong>
            </p>
          </div>
          <div className="filter_description_down">
            <div className="border_underline"></div>
            <h2>
              <small>Nuestros </small>
              <strong>Hoteles</strong>
            </h2>
            <p>Muy acogedores y especiales</p>
          </div>
        </div>
        <div className="hotels">{hotels}</div>
      </React.Fragment>
    );
  }
}
