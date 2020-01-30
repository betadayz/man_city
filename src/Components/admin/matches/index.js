import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';
import { TableHead, TableRow, TableCell, Table, TableBody } from '@material-ui/core';



export default class AdminMatches extends Component {

    state = {
        isLoading: true,
        matches: []
    }
  
      // loading from database
    componentDidMount() {
        firebaseMatches.once('value').then(snapshot => {
            const matches = firebaseLooper(snapshot);

            this.setState({
                isLoading: false,
                matches: reverseArray(matches)
            })
        });
    }

    render() {
        return (
                <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Match</TableCell>
                                    <TableCell>Result</TableCell>
                                    <TableCell>Final</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                              { this.state.matches ?
                                 this.state.matches.map((match,i) => (
                                     <TableRow key={i}>
                                         <TableCell>
                                             {match.date}
                                         </TableCell>
                                         <TableCell>
                                             <Link to={`/admin_matches/edit_match/${match.id}`}>
                                                 {match.away} <strong>-</strong> {match.local}

                                             </Link>
                                         </TableCell>
                                         <TableCell>
                                             {match.resultAway} <strong>-</strong> {match.resultLocal} 
                                         </TableCell>
                                         <TableCell>
                                             { match.final === "Yes" ? 
                                               <span className="matches_tag_red">Final</span>
                                               :
                                               <span className="matches_tag_green">Not played yet</span>
                                             
                                             }
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
