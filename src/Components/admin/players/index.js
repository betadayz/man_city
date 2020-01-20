import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
import { TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core';

export default class AdminPlayers extends Component {

    state = {
        isLoading: true,
        players: []
    }

    componentDidMount() {
        firebasePlayers.once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot);

            this.setState({
                isLoading: false,
                players: reverseArray(players)
            })
        })
    }


    render() {
        console.log(this.state)
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First name</TableCell>
                                    <TableCell>Last name</TableCell>
                                    <TableCell>Jersey number</TableCell>
                                    <TableCell>Position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                              { this.state.players ?
                                 this.state.players.map((player,i) => (
                                     <TableRow key={i}>
                                         <TableCell>
                                             <Link to={`/admin_players/add_players/$`}>
                                                 {player.name}
                                             </Link>
                                         </TableCell>
                                         <TableCell>
                                            <Link to={`/admin_players/add_players/$`}>
                                                  {player.lastname}
                                               </Link>
                                         </TableCell>
                                         <TableCell>
                                         {player.jerseynumber}
                                         </TableCell>
                                         <TableCell>
                                         {player.position}
                                         </TableCell>
                                     </TableRow>
                                 ))
                              
                                : null
                              }

                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                    <div className="admin_progress">
                        {this.state.isLoading ?
                            <CircularProgress thickness={7} style={{ color: '#98c5e9' }} />
                            : ''
                        }
                    </div>
                </AdminLayout>
        )
    }
}
