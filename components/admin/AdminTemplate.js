import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Cards from './components/Cards';


const AdminTemplate = () => {
  
    return (
    <>
    
    {/* component */}

    <div xData="setup()" className>
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-black">

      {/* Header */}
      <Header/>
      {/* ./Header */}
    
      {/* Sidebar */}
      <Sidebar/>
      {/* ./Sidebar */}
    
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
    
        {/* Statistics Cards */}
        <Cards/>
       
        {/* ./Statistics Cards */}
    
        {/* ./Recent Activities */}
    
        {/* Task Summaries */}

        {/* Client Table */}
    
        {/* Contact Form */}
    
        {/* External resources */}
      </div>
    </div>
  </div>  
    </>
  )
}

export default AdminTemplate