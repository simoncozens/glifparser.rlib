initSidebarItems({"enum":[["IntegerOrFloat","The UFO data type “integer or float”."]],"fn":[["read","Read UFO .glif XML to Glif struct. This should only be used when you have no known filename, and the glif is unattached from a UFO."],["read_from_filename","If you have a known filename, it is always preferable to call this function, as it sets the filename on the Glif as well as on its GlifComponent’s, easing their transition into Component’s."],["read_from_filename_pedantic",""],["read_pedantic",""],["write",""],["write_to_filename",""]],"mod":[["anchor",".glif `<anchor>` + ufo2ft `_` mark/base determination"],["color","impl’s/struct for shared `<image>`/`<guideline>`/layer color behavior"],["component",".glif `<component>`"],["error","Provides main error type [`GlifParserError`] & its impl’s"],["glif","[`Glif`] (`<glif>` toplevel), read/write modules, + [`Lib`]"],["guideline",".glif `<guideline>`"],["image",".glif `<image>` w/ability to read to a bitmap if filename valid"],["matrix","Shared behavior between `<component>`, `<image>` based on PostScript-style matrices of 6 values"],["outline",".glif `<outline>` and `<contour>`"],["pedantry","When reading .glif files, how strict ought we to be? Can we make fixes to bad input, or ought we to error out and make the user do it?"],["point",".glif `<point>`"],["string","Enforcers for UFO format string rules — no control characters ([`GlifString`]), len ≥ 0 ([`GlifStringLenOne`])"]],"trait":[["Codepoint",""],["IsValid",""],["PointLike",""]]});