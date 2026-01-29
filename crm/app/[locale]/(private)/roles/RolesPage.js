'use client';

import RoleEditor from "@/components/Items/RolesEditor";
import RolesList from "@/components/Lists/RolesList";
import AddRole from "@/components/Popup/AddRole";
import { selectRolesList } from "@/store/selectors/selectors";
import { setRolesList } from "@/store/slices/rolesSlice";
import { updateRoleThunk } from "@/store/thunks/rolesThunks";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RolesPage({ initialRoles }) {
  const dispatch = useDispatch();
  const roles = useSelector(selectRolesList);
  const [open, setOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(null);

  const openEditor = () => setOpen(true);
  const closeEditor = (role) => {
    setOpen(false);
    if (role.name) {
      dispatch(setRolesList([...roles, role]));
    }
  };
  
  const updateRole = (updatedRole) => {
    const newList = roles.map(r =>
      r._id === updatedRole._id ? updatedRole : r
    );

    dispatch(setRolesList(newList));
    setActiveRole(updatedRole);
  };

  const savePermissions = (role) => {
    const newList = roles.map(r =>
      r._id === role._id ? role : r
    );
    
    dispatch(setRolesList(newList));
    dispatch(updateRoleThunk(role));
  }

  useEffect(() => {
    if (roles.length === 0 && initialRoles?.length) {
      dispatch(setRolesList(initialRoles));
      setActiveRole(initialRoles[0]);
    }

    if (roles.length > 0 && !activeRole) {
      setActiveRole(roles[0]);
    }
  }, [dispatch, initialRoles, roles.length]);

  return (
    <>
      <section className="roles">
        <div className="roles__container">
          <RolesList
            open={open}
            onOpen={openEditor}
            roles={roles}
            activeRole={activeRole}
            onSelect={setActiveRole} 
          />
          {activeRole && (
            <RoleEditor
              key={activeRole._id}
              role={activeRole}
              onChange={updateRole} 
              handleClick={(role) => savePermissions(role)}
            />
          )}
        </div>
      </section>
      <AddRole open={open} onClose={(role) => closeEditor(role)} />
    </>
  );
}
