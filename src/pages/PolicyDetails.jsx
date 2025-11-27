import {useEffect, useState} from "react";
import {api} from "../api/api.js";

import { useParams } from "react-router-dom";
export default function PolicyDetails(){
    const { id } = useParams();



    ;
    const [votes, setVotes] = useState([]);
    const [policy, setPolicy] = useState(null);





    useEffect(() => {
        api.getPolicyById(id).then(setPolicy);
        api.getVotesForPolicy(id).then(setVotes);
    }, [])

    if (!policy) {return }
    // console.log("policy ID", policy.id);
    // console.log("policies", policies);
    // console.log("votes", votes);

    // const policy = policies.find((p) => p.id === policyId);
    const policyVotes = votes.filter((v) => v.policyId === policy.id);


    const yesVotes = policyVotes.filter((v) => v.vote === "yes").length;
    const noVotes = policyVotes.filter((v) => v.vote === "no").length;


    if (!policy) return <div className="p-6 text-center">Policy not found.</div>;


    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center w-full">
            <div className="w-full max-w-3xl rounded-2xl shadow-lg p-6 bg-white">
                <div>
                    <h1 className="text-3xl font-bold mb-4">{policy.title}</h1>


                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {policy.description}
                    </p>


                    <div className="text-sm text-gray-500 mb-4">
                        <p>Created By: {policy.createdBy}</p>
                        <p>Created At: {new Date(policy.createdAt).toLocaleString()}</p>
                    </div>


                    <div className="border-t pt-4 mt-4">
                        <h2 className="text-xl font-semibold mb-2">Vote Summary</h2>
                        <div className="flex gap-6 text-lg">
                            <p className="font-medium">Yes: {yesVotes}</p>
                            <p className="font-medium">No: {noVotes}</p>
                            <p className="font-medium">Total Votes: {policyVotes.length}</p>
                        </div>
                    </div>
                    <div className={'border-t pt-4 mt-4 w-full flex justify-center'}>
                        <a href={`/vote/${policy.id}`} className={'bg-cyan-600 cursor-pointer w-20 h-8 flex items-center justify-center rounded-2xl'}>Vote </a>
                    </div>


                    <div className="border-t pt-4 mt-6">
                        <h3 className="text-xl font-semibold mb-2">Voting Breakdown</h3>
                        <div className="flex flex-col gap-3">
                            {policyVotes.map((vote) => (
                                <div
                                    key={vote.id}
                                    className="p-4 bg-gray-50 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <p className="font-medium">{vote.voterId}</p>
                                    <p className="capitalize">Vote: {vote.vote}</p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(vote.votedAt).toLocaleString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}