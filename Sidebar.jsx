import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import db from './firebase'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {

  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    ))
  }, [])
  
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">

          <h2>clever programmer</h2>
          <h3>
            <FiberManualRecord />
            Saleh Al fadhel
          </h3>

        </div>
        <Create />
        
      </div>
      <SidebarOption Icon={InsertComment} title="Threads"/>
      <SidebarOption Icon={Inbox} title="Mentions & Reactions"/>
      <SidebarOption Icon={Drafts} title="Saved items"/>
      <SidebarOption Icon={BookmarkBorder} title="CHannel browser"/>
      <SidebarOption Icon={PeopleAlt} title="people & user groups"/>
      <SidebarOption Icon={Apps} title="Apps"/>
      <SidebarOption Icon={FileCopy} title="File browser"/>
      <SidebarOption Icon={ExpandLess} title="Show less"/>
      < hr />
      <SidebarOption Icon={ExpandMore} title='Channels' />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title='Add Channel' />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id}/>
      ))}

    </div>
  )
}

export default Sidebar