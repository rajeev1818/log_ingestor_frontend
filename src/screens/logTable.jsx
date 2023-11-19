import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner";




const LogTable = ({level, message, resourceId, traceId, spanId, commit, parentResourceId, timestart, timeend}) =>{

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const fetchLogs = async(params) =>{

        try {
            setLoading(true);
            
            const {data} = await axios.get(`https://log-backend.onrender.com/api/log`, {params});
            if(data.status){
                setLogs(data.logs);
                setTotalPages(Math.ceil(data.totalCount / params.limit));
                setTotalCount(data.totalCount);
            }
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            console.log(error);

        }


    } 

    useEffect(() => {
        let token;
        const params = {
            level,
            message,
            resourceId,
            traceId,
            spanId,
            commit,
            parentResourceId,
            timestart,
            timeend,
            page,
            limit: 7
        }
  
        if(level || message || resourceId || traceId || spanId || commit || parentResourceId){ 
            clearTimeout(token);
            token = setTimeout(() => {
                setPage(1);
                setTotalPages(0);
                setTotalCount(0);
                fetchLogs(params);
            }, 1000);
        }
        else{
            fetchLogs(params);
        }
  
        return () => clearTimeout(token);
        
    }, [level, message, resourceId, traceId, spanId, commit, parentResourceId, page, timestart, timeend])


    return (
        

        <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Level
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Message
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Resource Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Timestamp
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Trace Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Span Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Commit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Parent Resource Id
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <Spinner /> :

                        logs.length === 0 
                        ? 
                        <tr>
                            <td className="px-6 py-4">               
                            </td>
                            <td className="px-6 py-4">               
                            </td>
                            <td className="px-6 py-4">               
                            </td>
                            <td className="px-6 py-4">               
                            </td>
                            <td className="px-6 py-4">   
                               No Log Found             
                            </td>
                            
                            <td className="px-6 py-4">               
                            </td>
                            <td className="px-6 py-4">               
                            </td>
                            <td className="px-6 py-4">               
                            </td>
                        </tr> :

                        logs.map((each, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                
                                <td className="px-6 py-4">
                                    {each?.level}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.message}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.resourceid}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.timestamp}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.traceid}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.spanid}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.commit}
                                </td>
                                <td className="px-6 py-4">
                                    {each?.parentresourceid}
                                </td>
                        
                            </tr>
                        ))
                        
                    }
                    
                </tbody>
            </table>
            <div className="mt-5 mb-3">
                <span className="mr-3">Showing {(page-1)*7 + 1} to {Math.min(page*7, totalCount)} of  {totalCount}</span>
                <button onClick={handlePrevPage} disabled={page === 1} className="mr-3 bg-slate-900 text-white p-1 rounded w-24 cursor-pointer">
                    Previous
                </button>
                
                <button onClick={handleNextPage} disabled={page === totalPages} className=" bg-slate-900 text-white p-1 rounded w-24 cursor-pointer">
                    Next
                </button>
                <span className="ml-3">Page {page}</span>
            </div>
        </div>

    )

}

export default LogTable;