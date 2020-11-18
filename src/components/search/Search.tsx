import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../util/axiosConfig";
import { userCorrected } from "../../util/Models";
import { Button } from "reactstrap";

//"/users"

interface option {
  id: number;
  firstname: string;
  lastname: string;
}

export const Search: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = React.useState<option[]>([]);
  const [value, setValue] = useState<option | null>({
    id: 0,
    firstname: "",
    lastname: "",
  });
  const loading = open && options.length === 0;
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      const response = await axiosInstance.get("/users");
      if (active) {
        setOptions(
          response.data.map((user: userCorrected) => ({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
          }))
        );
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      <Autocomplete
        style={{
          display: "inline-block",
          backgroundColor: "white",
          minWidth: "200px",
          margin: 5
        }}
        options={options}
        getOptionLabel={(option: { firstname: string; lastname: string; }) => option.firstname + " " + option.lastname}
        value={value}
        onChange={(event: any, newValue: option | null) => {
          setValue(newValue);
        }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option: any, value: any) =>
          option.firstname === value.firstname &&
          option.lastname === value.lastname
        }
        loading={loading}
        placeholder="Search Users"
        renderInput={(params: any) => <TextField {...params} />}
      />
      <Button
        type="submit"
        href={value && `/profile/${value.id}`}
        style={{ display: "inline-block", margin:5}}
      >
        Search
      </Button>
    </>
  );
};
