function Table({ data, config, keyFn }) {
    const renderHeaders = config.map((colulmn) => {
        return (
            <th key={colulmn.label}>{colulmn.label}</th>
        )
    });

    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>{column.render(rowData)}</td>
            )
        });

        return (
        <tr key={keyFn(rowData)} className="border-b">
            {renderedCells}
        </tr>
    );
    });



    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;