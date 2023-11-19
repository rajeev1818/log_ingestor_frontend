
import { useState } from 'react';
import './App.css';
import LogTable from './screens/logTable';


function App() {

  const [query, setQuery] = useState({
    level: '',
    message: '',
    resourceId: '',
    traceId: '',
    spanId: '',
    commit: '',
    parentResourceId: '',
    timestart: '',
    timeend: ''
  })


  return (
    <div className="text-center p-16">
      <h1 className='text-3xl bold mb-4'>Log Ingestor</h1>
      <div className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 mb-5'>
        <div>
          <div>
            <input 
              type="search" 
              name='level'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Level ..."
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          <div className='mt-3'>
            <input 
              type="search" 
              name='message'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Message ..." 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          <div className='mt-3'>
            <input 
              type="search" 
              name='resourceId'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Resource Id ..." 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
        </div>
        <div>
          <div>
            <input 
              type="search" 
              name='traceId'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Trace Id" 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          <div className='mt-3'>
            <input 
              type="search" 
              name='spanId' 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Span Id" 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          <div className='mt-3'>
            <input 
              type="search" 
              name='timestart' 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Start Timestamp ..." 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          
        </div>
        <div>
          <div className=''>
            <input 
              type="search" 
              name='parentResourceId'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Parent Resource Id" 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          
          
          <div className='mt-3'>
            <input 
              type="search" 
              name='commit'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search Commit" 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
          <div className='mt-3'>
            <input 
              type="search" 
              name='timeend'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search End Timestamp ..." 
              onChange={(e) => setQuery((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))} 
            />
          </div>
        </div>
      </div>
      
        <LogTable 
          level = {query.level} 
          message = {query.message} 
          resourceId = {query.resourceId}
          traceId = {query.traceId}
          spanId = {query.spanId}
          commit = {query.commit}
          parentResourceId = {query.parentResourceId}
          timestart = {query.timestart}
          timeend = {query.timeend}
        />
      
    </div>
  );
}

export default App;
