const HOLIDAYS = [
    {
      "date": new Date("2024-01-01"),
      "name": "Año Nuevo"
    },
    {
      "date": new Date("2024-02-24"),
      "name": "Carnaval"
    },
    {
      "date": new Date("2024-02-25"),
      "name": "Carnaval"
    },
    {
      "date": new Date("2024-03-24"),
      "name": "Día Nacional de la Memoria por la Verdad y la Justicia"
    },
    {
      "date": new Date("2024-04-02"),
      "name": "Viernes Santo"
    },
    {
      "date": new Date("2024-05-01"),
      "name": "Día del Trabajador"
    },
    {
      "date": new Date("2024-05-25"),
      "name": "Día de la Revolución de Mayo"
    },
    {
      "date": new Date("2024-06-17"),
      "name": "Paso a la Inmortalidad del General Martín Miguel de Güemes"
    },
    {
      "date": new Date("2024-06-20"),
      "name": "Día de la Bandera"
    },
    {
      "date": new Date("2024-07-09"),
      "name": "Día de la Independencia"
    },
    {
      "date": new Date("2024-08-15"),
      "name": "Paso a la Inmortalidad del General José de San Martín"
    },
    {
      "date": new Date("2024-10-12"),
      "name": "Día del Respeto a la Diversidad Cultural"
    },
    {
      "date": new Date("2024-12-08"),
      "name": "Día de la Inmaculada Concepción de María"
    },
    {
      "date": new Date("2024-12-25"),
      "name": "Navidad"
    }
]

const today = new Date();
const nextHoliday = HOLIDAYS.find(holiday => holiday.date > today) || {...HOLIDAYS[0], 
  date: new Date(
    HOLIDAYS[0].date.getFullYear() + 1,
    HOLIDAYS[0].date.getMonth(),
    HOLIDAYS[0].date.getDate() + 1,
  ),
};

const diff = nextHoliday.date.getDate() - today.getDate() + 1

console.log(`Faltan ${diff} días para el próximo feriado`);

const rtf = new Intl.RelativeTimeFormat('es-AR', {numeric: "auto"})

function App() {
    return (
      <main>
        <h1>El próximo feriado ({nextHoliday.name}) es {rtf.format(diff, "days")}, el {nextHoliday.date.getDate()}/{nextHoliday.date.getMonth()+1}.</h1>
      </main>
    );
}

export default App;