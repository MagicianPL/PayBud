import { useState, useCallback } from 'react';

const useGetTotalTransactionsAmount = () => {
    const [loadingAmount, setLoadingAmount] = useState(true);
    const [amount, setAmount] = useState<any>(null);
    const [amountError, setAmountError] = useState("");

    const getTotalTransactionsAmount = useCallback(
        async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/transactionsamount`);
            const data = await res.json();

            if(!res.ok) {
                setAmountError(data.message);
                setLoadingAmount(false);
            };

            setLoadingAmount(false);
            setAmount(data.transactions);
        }, []);

        return { getTotalTransactionsAmount, loadingAmount, amount, amountError };
};

export default useGetTotalTransactionsAmount;