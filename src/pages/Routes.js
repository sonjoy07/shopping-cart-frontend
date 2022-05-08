import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function Routes() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  )
}
