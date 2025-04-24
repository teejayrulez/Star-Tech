// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventTicketing{
    address public eventOrganizer;
    uint public ticketPrice;
    uint public totalTickets;
    uint public ticketsSold;
    
    mapping(address => uint) public ticketbalances;
    mapping (uint => address) public ticketOwners;

    event TicketPurchased(address indexed buyer, uint ticketId);
    event TicketTransferred(address indexed from, address indexed to. uint ticketId);

    constructor(uint _ticketPrice, uint _totalTickets) {
        eventOrganizer = msg.sender;
        ticketPrice = _ticketPrice;
        totalTickets == _totalTickets;
        ticketSold = 0;
        }
    
    function purchaseTicket() external payable {
        require(msg.value == ticketPrice, "invalid amount sent");
        require(ticketsSold < totalTickets, "no more tickets available");

        uint ticketId = ticketsSold +1;

        ticketOwners[ticketId] = msg.sender;

        ticketbalances[msg.sender]++;
        ticketsSold ++;

        emit TicketPurchased(msg.sender, ticketId);
    }

    function transfer(params) {
        code
    }