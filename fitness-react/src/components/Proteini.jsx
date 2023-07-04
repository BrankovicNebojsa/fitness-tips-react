import { useState } from "react";

import RedTabele from "./RedTabele";

function Proteini({ niz }) {

    function search() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    const [sort, setSort] = useState(true);

    function sortAsc() {
        setSort(true);
    }

    function sortDesc() {
        setSort(false);
    }

    return (
        <div className="proteini">
            <input type="text" id="myInput" onKeyUp={search} placeholder="Pretraga po nazivu" />
            <table className="table" id="myTable">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Proizvodjac</th>
                        <th scope="col">Naziv</th>
                        <th scope="col">Opis</th>
                        <th scope="col">Cena</th>
                        <th scope="col">Procenat</th>
                    </tr>
                </thead>
                <tbody>
                    {sort === true ?
                        niz
                            .sort((a, b) => a.cena < b.cena ? -1 : 1)
                            .map((p) => <RedTabele key={p.id} protein={p}></RedTabele>)
                        :
                        niz
                            .sort((a, b) => a.cena > b.cena ? -1 : 1)
                            .map((p) => <RedTabele key={p.id} protein={p}></RedTabele>)
                    }
                </tbody>
            </table>
            <button type="button" className="btn btn-secondary" id="sortTable" onClick={sortDesc}> Sortiraj po ceni opadajuce</button>
            <button type="button" className="btn btn-secondary" id="sortTable" onClick={sortAsc}> Sortiraj po ceni rastuce</button>
        </div>
    );
}

export default Proteini;