function RedTabele({ protein }) {

    return (
        <tr>
            <th scope="row">{protein.id}</th>
            <td>{protein.proizvodjac}</td>
            <td>{protein.naziv}</td>
            <td>{protein.opis}</td>
            <td>{protein.cena}</td>
            <td>{protein.procenat}</td>
        </tr>
    );
}

export default RedTabele;