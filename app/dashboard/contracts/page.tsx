
import Link from 'next/link';
import PocketBase from "pocketbase"
import { cookies } from 'next/headers';


export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getContracts() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    pb.autoCancellation(false);
    const records = await pb.collection('contract').getFullList({});
    return records;
}

export default async function ContractsPage() {
    const cookie = cookies().get('pb_auth');

    // This never happens because of the middleware,
    // but we must make typescript happy
    if (!cookie) throw new Error('Not logged in');

    const contracts = await getContracts();

    return (
        <div className="container">
            <h1 className="title">All Contracts</h1>
            <div className="columns">
                {contracts.map((contract) => (
                    <Contract key={contract.id} contract={contract} />
                ))}
            </div>
        </div>
    );
}

function Contract({ contract }: any) {
    const { id, title, type, status, file, created } = contract || {};

    // Define CSS classes for different status values
    let statusClass = "";
    switch (status) {
        case 'Draft':
            break;
        case 'Active':
            statusClass = "has-text-success";
            break;
        case 'Expired':
            statusClass = "has-text-danger";
            break;
        default:
            break;
    }

    return (
        <Link href={`/contracts/${id}`}>
            <div className="column">
                <div className={`box ${statusClass}`}>
                    <h2 className="title is-5">{title}</h2>
                    <h5 className="subtitle is-6">{type}</h5>
                    <figure className="image is-128x128">
                        <img src="http://127.0.0.1:8090/api/files/contract/9iczy8n0mt2tmg2/photographer_service_contract_f0Je9XB93I.png" alt="Test image" />
                    </figure>
                    <p className={`is-size-7 ${statusClass} pt-6`}>{status}</p>
                    <p className="is-size-7">{created}</p>
                </div>
            </div>
        </Link>
    );
}
