import {
  ArrowCircleDown,
  ArrowCircleDownLeft,
  ArrowCircleUp,
  CurrencyDollar,
  TrashSimple,
} from "phosphor-react";
import Modal from "../components/Modal/modal";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import { API_URL } from "../utils/constants";
import DropdownOptions from "../components/DropdownOptions/DropdownOptions";

function DashbordPage() {
  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState([])

  console.log(transactions)
  async function getTransactions() {
    const transactionsData = await axios.get("http://localhost:3000/transactions");

    setTransactions(transactionsData.data);
  }

// getTransactions();
useEffect(() => {
  getTransactions();
}, [])

async function handleDeleteTransaction(id) {
  // Pop up de confirmação
  const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");

  if (confirmDelete === false) {
    return;
  }

  console.log(id);
  await axios.delete(API_URL + `/transactions/${id}`);
}

const AllInputsSum = transactions.filter((transaction) => transaction.transitionType === "input").reduce((prev, curr) => {
  return prev + parseFloat(curr.price);
}, 0);

const AllOutputsSum = transactions.filter((transaction) => transaction.transitionType === "output").reduce((prev, curr) => {
  return prev + parseFloat(curr.price);
}, 0);

const Total = AllInputsSum - AllOutputsSum;

console.log(AllInputsSum);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-purple-700 py-6 pb-32 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold">
            digital money
          </h1>
          <button 
          onClick={() => setOpen(true)}
          className="bg-white/20 px-12 rounded py-2 hover:bg-white/30 text-white border-0 cursor-pointer">
            New Transaction
          </button>
        </div>

        <div className="flex justify-end pt-4 md:mt-0">
          <DropdownOptions />

        </div>
      </header>
      <main className="flex-1 container mx-auto py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
            <Card title="Entries" icon={<ArrowCircleUp className="text-green-500" size={32} />} amount={AllInputsSum} bgColor="bg-white"/>

            <Card title="Exits" icon={<ArrowCircleDown className="text-red-500" size={32} />} amount={AllOutputsSum} bgColor="bg-white"/>

            <Card title="Amount" icon={<CurrencyDollar size={32} />} amount={Total} bgColor="bg-green-500" textColor="text-white"/>

        </div>

        <div className="overflow-x-auto mt-8">
          {/* Tabelas */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="px-6 py-3 pb-4 font-medium">Título</th>
                <th className="px-6 py-3 pb-4 font-medium">Valor</th>
                <th className="px-6 py-3 pb-4 font-medium">Categoria</th>
                <th className="px-6 py-3 pb-4 font-medium">Data</th>
                <th className="px-6 py-3 pb-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((transaction, index) => {
                return (
              <tr key={index} className="hover:bg-gray-50 bg-white">
                <td className="px-6 py-4">{transaction.title}</td>
                <td className="px-6 py-4 text-green-500 font-medium">
                  R$ {transaction.price}
                </td> 
                <td className="px-6 py-4">{transaction.category}</td>
                <td className="px-6 py-4">{transaction.date}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-500 hover:text-blue-700">
                    <TrashSimple
                      size={24}
                      weight="fill"
                      className="text-red-500 cursor-pointer  hover:text-red-700"
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    />
                  </button>
                </td>
              </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>n
      <Modal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default DashbordPage;
