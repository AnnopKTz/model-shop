import React from 'react'

const Inputnaja = ({ text }) => (
    <p>{text}</p>
)

const HOME = () => {
    return (
        <table class="table is-3" style={{border:"1px solid #00000"}}>
            <thead><tr class="has-text-weight-bold has-text-centered">CATALOG</tr></thead>
            <tbody>
                <tr class="has-text-centered">Classic Cars</tr>
                <tr class="has-text-centered">Motorctcles</tr>
                <tr class="has-text-centered">Planes</tr>
                <tr class="has-text-centered">Ships</tr>
                <tr class="has-text-centered">Trians</tr>
                <tr class="has-text-centered">Trucks&Buses</tr>
                <tr class="has-text-centered">Vintage Cars</tr>
            </tbody>

        </table>

    )
}

export default HOME