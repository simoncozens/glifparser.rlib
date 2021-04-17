use std::fmt::Debug;

#[derive(Clone, Debug, PartialEq)]
pub struct Anchor {
    pub x: f32,
    pub y: f32,
    pub class: String,
    pub r#type: AnchorType,
}

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum AnchorType {
    Undefined,
    Mark,
    Base,
    MarkMark,
    MarkBase,
} // Undefined used everywhere for now as getting type requires parsing OpenType features, which we will be using nom to do since I have experience w/it.

impl Anchor {
    pub fn new() -> Anchor {
        Anchor {
            x: 0.,
            y: 0.,
            r#type: AnchorType::Undefined,
            class: String::new(),
        }
    }
}
