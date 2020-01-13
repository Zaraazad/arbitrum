/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers';
import { Listener, Provider } from 'ethers/providers';
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils';
import { TransactionOverrides, TypedEventDescription, TypedFunctionDescription } from '.';

interface GlobalPendingInboxInterface extends Interface {
    functions: {
        depositERC20: TypedFunctionDescription<{
            encode([_tokenContract, _destination, _value]: [string, string, BigNumberish]): string;
        }>;

        depositERC721: TypedFunctionDescription<{
            encode([_tokenContract, _destination, _tokenId]: [string, string, BigNumberish]): string;
        }>;

        depositEth: TypedFunctionDescription<{
            encode([_destination]: [string]): string;
        }>;

        onERC721Received: TypedFunctionDescription<{
            encode([, _from, _tokenId]: [string, string, BigNumberish, Arrayish]): string;
        }>;

        transferEth: TypedFunctionDescription<{
            encode([_destination, _value]: [string, BigNumberish]): string;
        }>;

        withdrawERC20: TypedFunctionDescription<{
            encode([_tokenContract, _destination, _value]: [string, string, BigNumberish]): string;
        }>;

        withdrawERC721: TypedFunctionDescription<{
            encode([_tokenContract, _destination, _tokenId]: [string, string, BigNumberish]): string;
        }>;

        withdrawEth: TypedFunctionDescription<{
            encode([_value]: [BigNumberish]): string;
        }>;

        getPending: TypedFunctionDescription<{ encode([]: []): string }>;

        registerForInbox: TypedFunctionDescription<{ encode([]: []): string }>;

        sendMessages: TypedFunctionDescription<{
            encode([_messages]: [Arrayish]): string;
        }>;

        forwardTransactionMessage: TypedFunctionDescription<{
            encode([_vmAddress, _contractAddress, _seqNumber, _value, _data, _signature]: [
                string,
                string,
                BigNumberish,
                BigNumberish,
                Arrayish,
                Arrayish,
            ]): string;
        }>;

        sendTransactionMessage: TypedFunctionDescription<{
            encode([_vmAddress, _contractAddress, _seqNumber, _value, _data]: [
                string,
                string,
                BigNumberish,
                BigNumberish,
                Arrayish,
            ]): string;
        }>;

        depositEthMessage: TypedFunctionDescription<{
            encode([_vmAddress, _destination, _value]: [string, string, BigNumberish]): string;
        }>;

        depositERC20Message: TypedFunctionDescription<{
            encode([_vmAddress, _tokenContract, _destination, _value]: [string, string, string, BigNumberish]): string;
        }>;

        depositERC721Message: TypedFunctionDescription<{
            encode([_vmAddress, _tokenContract, _destination, _value]: [string, string, string, BigNumberish]): string;
        }>;
    };

    events: {
        DepositERC20MessageDelivered: TypedEventDescription<{
            encodeTopics([vmReceiverId, sender, destination, tokenAddress, value]: [
                string | null,
                null,
                null,
                null,
                null,
            ]): string[];
        }>;

        DepositERC721MessageDelivered: TypedEventDescription<{
            encodeTopics([vmReceiverId, sender, destination, tokenAddress, value]: [
                string | null,
                null,
                null,
                null,
                null,
            ]): string[];
        }>;

        EthDepositMessageDelivered: TypedEventDescription<{
            encodeTopics([vmReceiverId, sender, destination, value]: [string | null, null, null, null]): string[];
        }>;

        TransactionMessageDelivered: TypedEventDescription<{
            encodeTopics([vmSenderId, vmReceiverId, contractAddress, seqNumber, value, data]: [
                string | null,
                string | null,
                null,
                null,
                null,
                null,
            ]): string[];
        }>;
    };
}

export class GlobalPendingInbox extends Contract {
    connect(signerOrProvider: Signer | Provider | string): GlobalPendingInbox;
    attach(addressOrName: string): GlobalPendingInbox;
    deployed(): Promise<GlobalPendingInbox>;

    on(event: EventFilter | string, listener: Listener): GlobalPendingInbox;
    once(event: EventFilter | string, listener: Listener): GlobalPendingInbox;
    addListener(eventName: EventFilter | string, listener: Listener): GlobalPendingInbox;
    removeAllListeners(eventName: EventFilter | string): GlobalPendingInbox;
    removeListener(eventName: any, listener: Listener): GlobalPendingInbox;

    interface: GlobalPendingInboxInterface;

    functions: {
        getNFTTokens(
            _owner: string,
        ): Promise<{
            0: (string)[];
            1: (BigNumber)[];
        }>;

        getTokenBalance(_tokenContract: string, _owner: string): Promise<BigNumber>;

        getTokenBalances(
            _owner: string,
        ): Promise<{
            0: (string)[];
            1: (BigNumber)[];
        }>;

        hasNFT(_tokenContract: string, _owner: string, _tokenId: BigNumberish): Promise<boolean>;

        depositERC20(
            _tokenContract: string,
            _destination: string,
            _value: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        depositERC721(
            _tokenContract: string,
            _destination: string,
            _tokenId: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        depositEth(_destination: string, overrides?: TransactionOverrides): Promise<ContractTransaction>;

        onERC721Received(
            arg0: string,
            _from: string,
            _tokenId: BigNumberish,
            arg3: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        transferEth(
            _destination: string,
            _value: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        withdrawERC20(
            _tokenContract: string,
            _destination: string,
            _value: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        withdrawERC721(
            _tokenContract: string,
            _destination: string,
            _tokenId: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        withdrawEth(_value: BigNumberish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

        getPending(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        registerForInbox(overrides?: TransactionOverrides): Promise<ContractTransaction>;

        sendMessages(_messages: Arrayish, overrides?: TransactionOverrides): Promise<ContractTransaction>;

        forwardTransactionMessage(
            _vmAddress: string,
            _contractAddress: string,
            _seqNumber: BigNumberish,
            _value: BigNumberish,
            _data: Arrayish,
            _signature: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        sendTransactionMessage(
            _vmAddress: string,
            _contractAddress: string,
            _seqNumber: BigNumberish,
            _value: BigNumberish,
            _data: Arrayish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        depositEthMessage(
            _vmAddress: string,
            _destination: string,
            _value: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        depositERC20Message(
            _vmAddress: string,
            _tokenContract: string,
            _destination: string,
            _value: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;

        depositERC721Message(
            _vmAddress: string,
            _tokenContract: string,
            _destination: string,
            _value: BigNumberish,
            overrides?: TransactionOverrides,
        ): Promise<ContractTransaction>;
    };

    filters: {
        DepositERC20MessageDelivered(
            vmReceiverId: string | null,
            sender: null,
            destination: null,
            tokenAddress: null,
            value: null,
        ): EventFilter;

        DepositERC721MessageDelivered(
            vmReceiverId: string | null,
            sender: null,
            destination: null,
            tokenAddress: null,
            value: null,
        ): EventFilter;

        EthDepositMessageDelivered(
            vmReceiverId: string | null,
            sender: null,
            destination: null,
            value: null,
        ): EventFilter;

        TransactionMessageDelivered(
            vmSenderId: string | null,
            vmReceiverId: string | null,
            contractAddress: null,
            seqNumber: null,
            value: null,
            data: null,
        ): EventFilter;
    };

    estimate: {
        depositERC20(_tokenContract: string, _destination: string, _value: BigNumberish): Promise<BigNumber>;

        depositERC721(_tokenContract: string, _destination: string, _tokenId: BigNumberish): Promise<BigNumber>;

        depositEth(_destination: string): Promise<BigNumber>;

        onERC721Received(arg0: string, _from: string, _tokenId: BigNumberish, arg3: Arrayish): Promise<BigNumber>;

        transferEth(_destination: string, _value: BigNumberish): Promise<BigNumber>;

        withdrawERC20(_tokenContract: string, _destination: string, _value: BigNumberish): Promise<BigNumber>;

        withdrawERC721(_tokenContract: string, _destination: string, _tokenId: BigNumberish): Promise<BigNumber>;

        withdrawEth(_value: BigNumberish): Promise<BigNumber>;

        getPending(): Promise<BigNumber>;

        registerForInbox(): Promise<BigNumber>;

        sendMessages(_messages: Arrayish): Promise<BigNumber>;

        forwardTransactionMessage(
            _vmAddress: string,
            _contractAddress: string,
            _seqNumber: BigNumberish,
            _value: BigNumberish,
            _data: Arrayish,
            _signature: Arrayish,
        ): Promise<BigNumber>;

        sendTransactionMessage(
            _vmAddress: string,
            _contractAddress: string,
            _seqNumber: BigNumberish,
            _value: BigNumberish,
            _data: Arrayish,
        ): Promise<BigNumber>;

        depositEthMessage(_vmAddress: string, _destination: string, _value: BigNumberish): Promise<BigNumber>;

        depositERC20Message(
            _vmAddress: string,
            _tokenContract: string,
            _destination: string,
            _value: BigNumberish,
        ): Promise<BigNumber>;

        depositERC721Message(
            _vmAddress: string,
            _tokenContract: string,
            _destination: string,
            _value: BigNumberish,
        ): Promise<BigNumber>;
    };
}
